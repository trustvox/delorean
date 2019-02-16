import Controller from '@ember/controller';
import EmberObject from '@ember/object';

export default Controller.extend({
  loadedTask: EmberObject.create(),
  taskAction: 'create'
});
