import Filters from './view/FiltersView.js';
import Sort from './view/SortView.js';
import MainPresenter from './presenter/main-presenter.js';

import { render, RenderPosition } from './render.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const mainPresenter = new MainPresenter({container: tripEvents});


render(new Filters(), tripControlsFilters, RenderPosition.BEFOREEND);
render(new Sort(), tripEvents, RenderPosition.BEFOREEND);
mainPresenter.init();
