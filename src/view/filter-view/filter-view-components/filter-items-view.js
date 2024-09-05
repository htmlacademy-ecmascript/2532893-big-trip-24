import { capitalizeFirstLetter } from '../../../utils/utils.js';

const TYPES_OF_FILTER = ['everything', 'future', 'present', 'past'];

function createFilterTypeTemplate(filterType) {
  return `
  <div class="trip-filters__filter">
    <input id="filter-${filterType}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterType}">
      <label class="trip-filters__filter-label" for="filter-${filterType}">${capitalizeFirstLetter(filterType)}</label>
  </div>`;

}

export default function createAllFilterTypesTemplate() {
  return TYPES_OF_FILTER.map(createFilterTypeTemplate).join('');
}
