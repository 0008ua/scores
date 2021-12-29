import {
  faRoute,
  faMapMarkedAlt,
  faSchool,
  faTrain,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const config = {
  games: {
    train: {
      maxPlayersQty: 5,
      playersColors: ['red', 'green', 'blue', 'black', 'yellow'],
      routeMainScores: [20, 21],
      routeLocalScores: [5, 6, 7, 8, 9, 10, 11, 12, 13],
      cars: [
        { qty: 1, score: 1 },
        { qty: 2, score: 2 },
        { qty: 3, score: 4 },
        { qty: 4, score: 7 },
        { qty: 6, score: 15 },
        { qty: 8, score: 21 },
      ],
      rounds: [
        {
          path: 'start',
          icon: faUsers,
        },
        {
          path: 'routes',
          icon: faMapMarkedAlt,
        },
        {
          path: 'length',
          icon: faRoute,
        },
        {
          path: 'stations',
          icon: faSchool,
        },
        {
          path: 'cars',
          icon: faTrain,
        },

      ]
    }
  }



}