import Controller from "@ember/controller";
import EmberObject from "@ember/object";

export default class ApplicationController extends Controller {
  loadedTask = EmberObject.create();
  taskAction = "create";
}
