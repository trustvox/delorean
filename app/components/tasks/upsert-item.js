import Component from '@ember/component';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  actionName: 'create',
  model: EmberObject.create(),

  actions: {
    update() {
      this.model.save().then(() => {
        this.$(':input').val('');
      });
    },

    create() {
      let properties =
        this.model.getProperties('description', 'initial', 'ending');

      this.get('store').createRecord('task', properties).save().then(() => {
        this.$(':input').val('');
      });
    }
  }
});
