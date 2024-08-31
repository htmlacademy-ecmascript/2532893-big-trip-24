function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const buttonsTitles = {
  'delete': 'Delete',
  'cancel': 'Cancel',
}


export { capitalizeFirstLetter, buttonsTitles };
