import Model, { attr } from "@ember-data/model";

export default class TaskModel extends Model {
  @attr("string") description;
  @attr("string") initial;
  @attr("string") ending;

  // trackings: hasMany('tracking', { async: true, dependent: 'destroy' })
}
