import EmberRouter from '@ember/routing/router';
import config from 'delorean/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('edit', { path: 'edit/:task_id' });
});
