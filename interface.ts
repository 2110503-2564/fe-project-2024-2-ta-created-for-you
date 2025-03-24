interface Dentist {
    _id: string,
    name: string,
    experience: number,
    expertise: string,
    booking: Object[],
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
      tel: string,
      email: string,
      role: string,
      createdAt: string,
      __v: number
    }
  }

  interface Booking {
    _id: string,
    bookingDate: string,
    user: string,
    dentist: {
      _id: string,
      name: string,
      experience: number,
      expertise: string,
      id: string
    },
    createdAt: string,
    __v: number
  }

  interface Logs {
    _id: string,
    objectId: string,
    date: string,
    type: string,
    action: string,
    before: Dentist|Booking|undefined,
    after: Dentist|Booking|undefined
  }