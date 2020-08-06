import Component from "@ember/component";
import EmberObject from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  actionName: "create",
  model: EmberObject.create(),

  actions: {
    update() {
      this.model.save().then(() => {
        document.querySelectorAll("input").forEach((el) => (el.value = ""));
      });
    },

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
    },
  },
});
