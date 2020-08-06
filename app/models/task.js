import { Model, attr } from "@ember-data/model";

export default Model.extend({
  description: attr("string"),
  initial: attr("string"),
  ending: attr("string"),

  // trackings: hasMany('tracking', { async: true, dependent: 'destroy' })
});
