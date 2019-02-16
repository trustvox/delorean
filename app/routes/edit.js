import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);

    this.controllerFor('application')
      .set('loadedTask', model)
    this.controllerFor('application').set('taskAction', 'update');
  }
});
