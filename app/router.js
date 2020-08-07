import EmberRouter from "@ember/routing/router";
import config from "delorean/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("tasks", { path: "/" }, function () {
    this.route("new", { path: "/" });
    this.route("edit", { path: "edit/:id" });
  });
});
