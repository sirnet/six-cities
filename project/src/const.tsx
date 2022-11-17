import { Offer } from "./types/offer-date/offer-date"

export const OfferDate:Offer[] = [
  {
    id : '0',
    marker : 'Premium',
    imgSrc : '/img/apartment-01.jpg',
    price : 120,
    day : 'night',
    bookmark : false,
    starts : 4,
    description : 'Beautiful & luxurious apartment at great location',
    type : 'Apartment'
  },
  {
    id : '1',
    marker : '',
    imgSrc : '/img/room.jpg',
    price : 80,
    day : 'night',
    bookmark : true,
    starts : 4,
    description : 'Wood and stone place',
    type : 'Private room'
  },
  {
    id : '2',
    marker : '',
    imgSrc : 'img/apartment-02.jpg',
    price : 132,
    day : 'night',
    bookmark : false,
    starts : 4,
    description : 'Canal View Prinsengracht',
    type : 'Apartment'
  },
  {
    id : '3',
    marker : 'Premium',
    imgSrc : 'img/apartment-03.jpg',
    price : 180,
    day : 'night',
    bookmark : false,
    starts : 5,
    description : 'Nice, cozy, warm big bed apartment',
    type : 'Apartment'
  },
  {
    id : '4',
    marker : 'Premium',
    imgSrc : 'img/apartment-03.jpg',
    price : 80,
    day : 'night',
    bookmark : true,
    starts : 3,
    description : 'Wood and stone place',
    type : 'Apartment'
  }
]

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer'
}
