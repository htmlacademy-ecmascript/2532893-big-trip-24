import FormCreateView from '../view/create-form-view/form-create-view.js';
import FormEditView from '../view/edit-form-view/form-edit-view.js';
import PointView from '../view/point-view/point-view.js';
import { render, RenderPosition } from '../render.js';

export default class MainPresenter {

  constructor({ container }) {
    this.container = container;
  }
  init() {
    render(new FormEditView(), this.container, RenderPosition.BEFOREEND);
    render(new FormCreateView(), this.container, RenderPosition.BEFOREEND);
    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.container, RenderPosition.BEFOREEND);
    }
  }
}

