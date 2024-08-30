import FiltersView from './view/filter-view/filter-view.js';
import SortView from './view/sort-view/sort-view.js';
import MainPresenter from './presenter/main-presenter.js';

import { render, RenderPosition } from './render.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const mainPresenter = new MainPresenter({container: tripEvents});


render(new FiltersView(), tripControlsFilters, RenderPosition.BEFOREEND);
render(new SortView(), tripEvents, RenderPosition.BEFOREEND);
mainPresenter.init();
