export interface Result {
  item: {
    price: number
    sendDate: Date
    eta: Date
    code: string
  }
  history: {
    location: string
    code: string
    date: Date
    comment: string
    status: 'in-transit' | 'delayed'
    leg: 'pre transit' | 'in transit' | 'out for delivery' | 'delivered'
  }[]
  sender: {
    name: string
  }
}
