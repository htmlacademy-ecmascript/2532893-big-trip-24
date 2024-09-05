import { eventPoints } from '../mock/mock-point.js';

const POINT_COUNT = 3;

export default class TasksModel {
  tasks = Array.from({ length: POINT_COUNT }, eventPoints);

  getTasks() {
    return this.tasks;
  }
}
