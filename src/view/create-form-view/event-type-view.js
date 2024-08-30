import { RenderPosition, createElement, render } from "../../render.js";
import { capitalizeFirstLetter } from "../../utils/utils.js";

const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant']

function createEventTypeTemplate(eventType) {
  return `
    <div class="event__type-item">
      <input id="event-type-${eventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType}">
      <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-1">${capitalizeFirstLetter(eventType)}</label>
    </div>
  `
}

function createAllEventTypesTemplate() {

  const allEvents = []

  for (const eventType of EVENT_TYPES) {
    allEvents.push(createEventTypeTemplate(eventType))
  }
  return allEvents.join('');
}

export default class EventTypeView {
  getTemplate() {
    return createAllEventTypesTemplate()
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate())
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}


