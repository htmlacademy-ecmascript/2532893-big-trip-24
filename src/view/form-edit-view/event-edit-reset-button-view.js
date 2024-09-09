import { ButtonTitle } from '../../utils/utils.js';

export default function createEditResetButtonTemplate() {
  return `
    <button class="event__reset-btn" type="reset">${ButtonTitle.DELETE}</button>
  `;
}

