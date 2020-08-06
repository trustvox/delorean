import Route from "@ember/routing/route";

export default class EditRoute extends Route {
  setupController(controller, model) {
    // super.setupController(controller, model);

    this.controllerFor("application").set("loadedTask", model);
    this.controllerFor("application").set("taskAction", "update");
  }
}
