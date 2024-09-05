
import { capitalizeFirstLetter } from '../../../utils/utils.js';

const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

function createEventTypeTemplate(eventType) {
  return `

    <div class="event__type-item">
      <input id="event-type-${eventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType}">
      <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-1">${capitalizeFirstLetter(eventType)}</label>
    </div>
  `;
}

function createAllEventsTypesTemplate() {
  return EVENT_TYPES.map((type) => createEventTypeTemplate(type)) .join('');
}

export default function createAllEventsWrapperTemplate() {
  return `
    <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
               ${createAllEventsTypesTemplate()}
           </fieldset>
          </div>
      </div>
  `;

}
