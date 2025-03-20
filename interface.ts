interface Dentist {
    _id: string,
    name: string,
    experience: number,
    expertise: string,
    __v: number,
    id: string
  }
  
  interface DentistJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: Dentist[]
  }

  interface UserJson {
    success: boolean,
    data: {
      _id: string,
      name: string,
      email: string,
      tel: string,
      role: string,
      createdAt: string,
      __v: number
    }
  }