import FormCreateView from '../view/form-create-view/form-create-view.js';
import FormEditView from '../view/form-edit-view/form-edit-view.js';
import PointView from '../view/point-view/point-view.js';
import { render, RenderPosition } from '../render.js';

export default class MainPresenter {

  constructor({ container, pointsModel }) {
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    render(new FormEditView(), this.container, RenderPosition.BEFOREEND);
    render(new FormCreateView(), this.container, RenderPosition.BEFOREEND);
    for (let i = 0; i < this.points.length; i++) {
      render(new PointView({ point: this.points[i] }), this.container.getElement());
    }
  }
}

