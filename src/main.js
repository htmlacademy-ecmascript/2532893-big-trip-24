import FiltersView from './view/filter-view/filter-view.js';
import SortView from './view/sort-view/sort-view.js';
import MainPresenter from './presenter/main-presenter.js';
import { render, RenderPosition } from './render.js';
import { PointsModel } from '../src/model/points-model';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const mainPresenter = new MainPresenter({ container: tripEvents, pointsModel });


render(new FiltersView(), tripControlsFilters, RenderPosition.BEFOREEND);
render(new SortView(), tripEvents, RenderPosition.BEFOREEND);
mainPresenter.init();
