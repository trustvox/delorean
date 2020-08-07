import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class ViewsNavbarComponent extends Component {
  @action clearAll() {
    window.localStorage.clear();
  }
}
