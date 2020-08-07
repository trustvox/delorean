import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class TasksEditController extends Controller {
  @action onSaveHandler() {
    this.transitionToRoute("tasks.new");
  }
}
