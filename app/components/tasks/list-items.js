import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  actions: {
    edit(task) {
      this.router.transitionTo('edit', task);
    }
  }
});
