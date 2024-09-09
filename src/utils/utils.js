function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const ButtonsTitles = {
  'DELETE': 'Delete',
  'CANCEL': 'Cancel',
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

export { capitalizeFirstLetter, ButtonsTitles, getRandomNum, getUniqueID, getRandomArrayElement, generateRandomDate };
