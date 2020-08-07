import Route from "@ember/routing/route";

export default class TasksNewRoute extends Route {
  model() {
    return this.store.createRecord("task");
  }
}
