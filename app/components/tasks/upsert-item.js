import Component from "@glimmer/component";
import EmberObject from "@ember/object";
import { inject as service } from "@ember/service";

export default class UpsertItemComponent extends Component {
  @service store;

  actionName = "create";
  model = EmberObject.create();

  update() {
    this.model.save().then(() => {
      document.querySelectorAll("input").forEach((el) => (el.value = ""));
    });
  }

  create() {
    let properties = this.model.getProperties(
      "description",
      "initial",
      "ending"
    );

    this.store
      .createRecord("task", properties)
      .save()
      .then(() => {
        document.querySelectorAll("input").forEach((el) => (el.value = ""));
      });
  }
}
