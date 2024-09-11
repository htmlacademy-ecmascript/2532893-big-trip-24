import { eventPoints } from '../mock/mock-point.js';

class PointsModel {
  points = eventPoints;

  getPoints() {
    return this.points;
  }
}
export { PointsModel };
