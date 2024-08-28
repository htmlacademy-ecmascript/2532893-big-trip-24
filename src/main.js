
import Filters from './view/Filters.js';
import { render, RenderPosition } from './render.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');


render(new Filters(), tripControlsFilters, RenderPosition.BEFOREEND);
