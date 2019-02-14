import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    // Implement your custom setup after
    this.controllerFor('application').set('loadedTask', model);
  }
});
