import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import userLogin from "@/libs/userLogIn";

export const authOptions:AuthOptions = {
    
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            id: "login",
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
            email: { label: "Email", type: "email", placeholder: "email" },
            password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) : Promise<any> {
                // Add logic here to look up the user from the credentials supplied
                if (!credentials) return null;
                const user = await userLogin(credentials.email, credentials.password)

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            id: "register",
            name: "Credentials (Register)",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
            name: {label: "Name", type: "text", placeholder: "Name"},
            tel: {label: "Tel", type: "text", placeholder: "Tel"},
            email: { label: "Email", type: "email", placeholder: "Email" },
            password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) : Promise<any> {
                // Add logic here to look up the user from the credentials supplied
                if (!credentials) return null;
                const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: credentials.name,
                        tel: credentials.tel,
                        email: credentials.email,
                        password: credentials.password
                    })
                })
            
                if (!response.ok) {
                    throw new Error("Failed to register new user");
                }

                const user : {success: boolean, token: string} = await response.json();
                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    
    ],
    session: {strategy: "jwt"},
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user};
        },
        async session({session, token}) {
            session.user = token as any;
            return session;
        },
    },
};
