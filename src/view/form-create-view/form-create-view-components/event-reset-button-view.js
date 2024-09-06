
import { ButtonsTitles } from '../../../utils/utils.js';

export default function createResetButtonTemplate() {
  return `
    <button class="event__reset-btn" type="reset">${ButtonsTitles.CANCEL}</button>
  `;
}
