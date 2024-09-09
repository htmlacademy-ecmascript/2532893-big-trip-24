import { destinationPoints, destinationPointsDescriptionsList, destinationPointsImagesURLsList, destinationPointsImagesDescriptionsList, offerTitles, EventType } from '../utils/constants.js';
import { generateRandomDate } from '../utils/utils.js';


// Offers
function createOffersIDsList() {
  const offersIDsListResult = [];
  for (let i = 0; i < offerTitles.length; i++) {
    offersIDsListResult.push(i ** 3 + 739 * i + 7356);
  }
  return offersIDsListResult;

}
const offersIDsList = createOffersIDsList();
const offersPriceList = offersIDsList.map((id) => Math.floor(id / 100));

function createOffer() {
  const offersList = [];
  for (let i = 0; i < offersIDsList.length; i++) {
    offersList.push(
      {
        'id': offersIDsList[i],
        'title': offerTitles[i],
        'price': offersPriceList[i],

      }
    );
  }
  return offersList;
}

const offers = createOffer();

// Cities

function createDestinationPointsIDsList() {
  const destinationPointsIDsListResult = [];
  for (let i = 0; i < destinationPoints.length; i++) {
    destinationPointsIDsListResult.push(i ** 3 + 739 * i + 117);
  }
  return destinationPointsIDsListResult;

}

const destinationPointsIDsList = createDestinationPointsIDsList();


function createDestinationPoints() {
  const pointsList = [];
  for (let i = 0; i < destinationPointsIDsList.length; i++) {
    pointsList.push(
      {
        'id': String(destinationPointsIDsList[i]),
        'description': destinationPointsDescriptionsList[i],
        'name': destinationPoints[i],
        'pictures': [
          {
            'src': destinationPointsImagesURLsList[i],
            'description': destinationPointsImagesDescriptionsList[i],
          }
        ]

      }
    );

  }
  return pointsList;
}

const points = createDestinationPoints();


// Points

function createPointsIDsList() {
  const pointsIDsListResult = [];
  for (let i = 0; i < destinationPointsIDsList.length; i++) {
    pointsIDsListResult.push(i ** 3 + 7133 * (i ** 2) + 314);
  }
  return pointsIDsListResult;
}

const pointsIDsList = createPointsIDsList();

function createPoints() {
  const pointsList = [];
  for (let i = 0; i < pointsIDsList.length; i++) {
    pointsList.push(
      {
        'id': String(pointsIDsList[i]),
        'basePrice': offersPriceList[i] * 100,
        'date_from': generateRandomDate(new Date(2024, 10, 1), new Date(2024, 10, 31)),
        'date_to': generateRandomDate(new Date(2024, 11, 1), new Date(2024, 11, 30)),
        'destination': String(destinationPointsIDsList[i]),
        'is_favorite': true,
        'offers': [
          offers[i]
        ],
        'type': Object.values(EventType)[Math.floor(Math.random() * Object.values(EventType).length)],
      });
  }
  return pointsList;
}

const eventPoints = createPoints();


export { eventPoints, points, offers };


