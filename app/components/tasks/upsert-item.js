import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class UpsertItemComponent extends Component {
  @service store;

  save() {
    this.args.model.save().then(() => {
      this.args.onSaveHandler && this.args.onSaveHandler();
    });
  }
}
