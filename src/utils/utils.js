function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const ButtonTitle = {
  'DELETE': 'Delete',
  'CANCEL': 'Cancel',
};


export { capitalizeFirstLetter, ButtonTitle };
