import { Result } from '../../components/track-result/interfaces'

const fakeResultOne: Result = {
  item: {
    price: 5000000.0,
    sendDate: new Date(),
    eta: new Date(),
    code: 'ASDFGHKL',
    currentLocation: {
      lat: 48.864716,
      lng: 2.349014,
      text: 'Paris, France',
    },
  },
  history: [
    {
      location: 'New York, United States',
      code: 'NYU',
      date: new Date(),
      comment: 'Delivery delayed',
      status: 'delayed',
      leg: 'pre transit',
    },
    {
      location: 'Paris, France',
      code: 'PAR',
      date: new Date(),
      comment: 'Package collected at office',
      status: 'in-transit',
      leg: 'pre transit',
    },
    {
      location: 'Torino, Italy',
      code: 'TOR',
      date: new Date(),
      comment: 'Package received at sorting hub',
      status: 'in-transit',
      leg: 'in transit',
    },
    {
      location: 'Venice, Italy',
      code: 'VEN',
      date: new Date(),
      comment: 'Package sent out for delivery',
      status: 'in-transit',
      leg: 'in transit',
    },
  ],
  sender: {
    name: 'Tracy Media LLC.',
  },
}

export const results = {
  ASDFGHKL: fakeResultOne,
}
