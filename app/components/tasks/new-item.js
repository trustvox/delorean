import Component from '@ember/component';
import { inject as service } from '@ember/service';
// import Task from '../../models/task'

export default Component.extend({
  store: service(),

  actions: {
    save() {
      let properties = this.getProperties('description', 'initial', 'ending');

      this.get('store').createRecord('task', properties).save();
    }
  }
});
