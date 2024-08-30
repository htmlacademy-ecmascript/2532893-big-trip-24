import { createElement } from '../../../render.js';

function createResetButtonTemplate() {
  return `
    <button class="event__reset-btn" type="reset">Cancel</button>
  `;
}


export default class ResetButtonView {
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

