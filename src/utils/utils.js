function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const buttonsTitles = {
  'delete': 'Delete',
  'cancel': 'Cancel',
};

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
};

export { capitalizeFirstLetter, buttonsTitles, getRandomArrayElement };
