
import CreateForm from '../view/CreateFormView.js';
import EditForm from '../view/EditFormView.js';
import Point from '../view/PointView.js';

import { render, RenderPosition } from '../render.js';



export default class MainPresenter {


  constructor({ container }) {
    this.container = container;
  }

  init() {

    render(new EditForm(), this.container, RenderPosition.BEFOREEND);
    render(new CreateForm(), this.container, RenderPosition.BEFOREEND);
    for (let i = 0; i < 3; i++) {
      render(new Point(), this.container, RenderPosition.BEFOREEND);
    }


  }
}


