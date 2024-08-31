import { createElement } from '../../render.js';
import { buttonsTitles } from '../../utils/utils.js';

function createEditResetButtonTemplate() {
  return `
    <button class="event__reset-btn" type="reset">${buttonsTitles.delete}</button>
  `;
}


export default class EventEditResetButtonView {
  getTemplate() {
    return createEditResetButtonTemplate();
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

