import { destinationPoints, destinationPointsDescriptionsList, destinationPointsImagesURLsList, destinationPointsImagesDescriptionsList, offerTitles, EventType } from '../utils/constants.js';
import { getRandomArrayElement, generateRandomDate } from '../utils/utils.js';

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
        'id': destinationPointsIDsList[i],
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
        'id': pointsIDsList[i],
        'base_price': offersPriceList[i] * 100,
        'date_from': generateRandomDate(new Date(2024, 10, 1), new Date(2024, 10, 31)),
        'date_to': generateRandomDate(new Date(2024, 11, 1), new Date(2024, 11, 30)),
        'destination': getRandomArrayElement(destinationPoints),
        'is_favorite': true,
        'offers': [
          offers[i]
        ],
        'type': Object.keys(EventType)[Math.floor(Math.random() * Object.keys(EventType).length)],
      });
  }
  return pointsList;
}

const eventPoints = createPoints();


console.log(offers);
console.log(points);
console.log(eventPoints);
// Points


