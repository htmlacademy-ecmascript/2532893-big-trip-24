
const destinationPoints = ['Amsterdam', 'Geneva', 'Chamonix', 'Paris', 'Barcelona'];
const destinationPointsDescriptionsList = [
  'The capital of the Netherlands',
  'Very expensive city it Switzerland',
  'The first capital of winter olympic games',
  'The world\'s most famous city for travel',
  'The city with a excellent architecture'
];
const destinationPointsImagesURLsList = [
  'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1693302262270-c3cec799e1ad?q=80&w=3009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1693302262270-c3cec799e1ad?q=80&w=3009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];
const destinationPointsImagesDescriptionsList = [
  'Amsterdam view', 'Geneva view', 'Chamonix view', 'Paris view', 'Barcelona view'
];

const offerTitles = ['Add luggage', 'Switch to comfort class', 'Add meal', 'Choose seats', 'Travel by train'];
const EventType = {
  TAXI: 'taxi',
  BUS: 'bus',
  TRAIN: 'train',
  SHIP: 'ship',
  DRIVE: 'drive',
  FLIGHT: 'flight',
  CHECKIN: 'check-in',
  SIGHTSEEING: 'sightseeing',
  RESTAURANT: 'restaurant'
};


export { destinationPoints, destinationPointsDescriptionsList, destinationPointsImagesURLsList, destinationPointsImagesDescriptionsList, offerTitles, EventType };
