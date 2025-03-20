interface VenueItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    dailyrate: number,
    __v: number,
    id: string
  }
  
  interface VenueJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: VenueItem[]
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