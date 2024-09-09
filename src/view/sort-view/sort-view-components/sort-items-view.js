import { capitalizeFirstLetter } from '../../../utils/utils.js';

const TYPES_OF_SORT = ['day', 'event', 'time', 'price', 'offer'];

function chooseSortType(sortType) {
  return sortType === 'offer' ? 'Offers' : capitalizeFirstLetter(sortType);
}

function createSortTypeTemplate(sortType) {
  return `
  <div class="trip-sort__item  trip-sort__item--${sortType}">
    <input id="sort-${sortType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType}">
      <label class="trip-sort__btn" for="sort-${sortType}">${chooseSortType(sortType)}</label>
  </div>
  `;
}

function createAllSortTypesTemplate() {
  return TYPES_OF_SORT.map(createSortTypeTemplate).join('');
}

export { createAllSortTypesTemplate };
