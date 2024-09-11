import { ButtonTitle } from '../../../utils/utils.js';

export default function createResetButtonTemplate() {
  return `
    <button class="event__reset-btn" type="reset">${ButtonTitle.CANCEL}</button>
  `;
}
