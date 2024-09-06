function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ButtonsTitles = {
  'DELETE': 'Delete',
  'CANCEL': 'Cancel',
};


export { capitalizeFirstLetter, ButtonsTitles };
