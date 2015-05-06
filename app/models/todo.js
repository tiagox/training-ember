import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
}).reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'Complete Ember.js tutorial.',
    isCompleted: false
  }, {
    id: 2,
    title: 'Checkout some more Ember stuff.',
    isCompleted: true
  }, {
    id: 3,
    title: 'Solve world hunger (with Ember).',
    isCompleted: false
  }]
});
