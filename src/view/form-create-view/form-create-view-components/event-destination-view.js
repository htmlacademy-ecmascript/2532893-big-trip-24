const EVENT_DESTINATION_POINTS = ['Amsterdam', 'Geneva', 'Chamonix'];

function createDestinationTemplate(point) {
  return `
    <option value=${point}></option>
  `;
}

function createDestinationListTemplate() {
  return EVENT_DESTINATION_POINTS.map((point) => createDestinationTemplate(point));
}

export default function createDestinationInputTemplate() {
  return `
      <div class="event__field-group  event__field-group--destination">
         <label class="event__label  event__type-output" for="event-destination-1">
            Flight
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
            <datalist id="destination-list-1">
               ${createDestinationListTemplate()}
            </datalist>
        </div>
  `;
}

