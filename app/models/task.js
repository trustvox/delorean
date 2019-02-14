import DS from 'ember-data';

const {
  Model,
  attr,
  // hasMany
} = DS;

export default Model.extend({
  description: attr('string'),
  initial: attr('string'),
  ending: attr('string'),

  // trackings: hasMany('tracking', { async: true, dependent: 'destroy' })
});
