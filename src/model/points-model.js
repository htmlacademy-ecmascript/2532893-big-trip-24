import { eventPoints } from '../mock/mock-point.js';

const POINT_COUNT = 3;

export default class PointsModel {
  tasks = Array.from({ length: POINT_COUNT }, eventPoints);

  getPoints() {
    return this.points;
  }
}
