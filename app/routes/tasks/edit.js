import Route from "@ember/routing/route";

export default class TasksEditRoute extends Route {
  model({ id }) {
    return this.store.findRecord("task", id);
  }
}
