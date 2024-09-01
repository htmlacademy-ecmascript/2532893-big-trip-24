import { capitalizeFirstLetter } from '../../../utils/utils.js';
import { createElement } from '../../../render.js';

const TYPES_OF_SORT = ['day', 'event', 'time', 'price', 'offer'];

function createSortTypeTemplate(sortType) {
  return sortType === 'offer' ?
    `
    <div class="trip-sort__item  trip-sort__item--${sortType}">
    <input id="sort-${sortType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType}">
      <label class="trip-sort__btn" for="sort-${sortType}">Offers</label>
  </div>` : `
  <div class="trip-sort__item  trip-sort__item--${sortType}">
    <input id="sort-${sortType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType}">
      <label class="trip-sort__btn" for="sort-${sortType}">${capitalizeFirstLetter(sortType)}</label>
  </div>
  `;
}

function createAllSortTypesTemplate() {
  return TYPES_OF_SORT.map(createSortTypeTemplate).join('');
}

class SortItemsView {
  getTemplate() {
    return createAllSortTypesTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

export {SortItemsView};
