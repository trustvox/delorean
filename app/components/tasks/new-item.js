import Component from '@ember/component';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Component.extend({
  store: service(),
  model: EmberObject.create(),

  actions: {
    save() {
      let properties = this.model.getProperties('description', 'initial', 'ending');

      this.get('store').createRecord('task', properties).save();
    }
  }
});
