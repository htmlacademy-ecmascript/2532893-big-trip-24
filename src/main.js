
import Filters from './view/Filters.js';
import Sort from './view/Sort.js';
import { render, RenderPosition } from './render.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');


render(new Filters(), tripControlsFilters, RenderPosition.BEFOREEND);
render(new Sort(), tripEvents, RenderPosition.BEFOREEND);
