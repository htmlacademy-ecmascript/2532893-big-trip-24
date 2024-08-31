import { createElement } from '../../../render.js';
import { buttonsTitles } from '../../../utils/utils.js'

function createResetButtonTemplate() {
  return `
    <button class="event__reset-btn" type="reset">${buttonsTitles.cancel}</button>
  `;
}


export default class EventResetButtonView {
  getTemplate() {
    return createResetButtonTemplate();
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

