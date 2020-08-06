import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class ListItemsComponent extends Component {
  @service() router;

  @action edit(task) {
    this.router.transitionTo("edit", task);
  }
}
