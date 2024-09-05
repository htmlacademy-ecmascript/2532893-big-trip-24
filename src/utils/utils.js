function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const buttonsTitles = {
  'delete': 'Delete',
  'cancel': 'Cancel',
};

export default function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
};

const getRandomNum = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getUniqueID(startID) {
  let uniqueID = startID;
  return function () {
    uniqueID += 1;
    return uniqueID;
  };
}

function generateRandomDate(from, to) {
  return new Date(
    from.getTime() +
    Math.random() * (to.getTime() - from.getTime()),
  );
}


export { capitalizeFirstLetter, buttonsTitles, getRandomNum, getUniqueID, getRandomArrayElement, generateRandomDate };
