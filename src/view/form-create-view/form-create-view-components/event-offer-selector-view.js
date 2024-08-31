import { createElement } from '../../../render.js';

const OFFER_TITLES = ['Add luggage', 'Switch to comfort class', 'Add meal', 'Choose seats', 'Travel by train'];

const offers = {
  'luggage': 30,
  'comfort': 100,
  'meal': 15,
  'seats': 5,
  'train': 40,
};

function createOfferSelectorTemplate(offer, value, title) {
  return `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer}-1" type="checkbox" name="event-offer-${offer}" checked>
      <label class="event__offer-label" for="event-offer-${offer}-1">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${value}</span>
      </label>
    </div>`;
}

function createAllOfferSelectorsTemplate() {
  return OFFER_TITLES.map((item, index) => createOfferSelectorTemplate(Object.keys(offers)[index], Object.values(offers)[index], item));
}

export default class EventOfferSelectorView{
  getTemplate() {
    return createAllOfferSelectorsTemplate().join('');
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
};
