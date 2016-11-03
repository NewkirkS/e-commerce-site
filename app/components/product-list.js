import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['price:asc'],
  sortedProducts: Ember.computed.sort('model.products', 'sortBy')
});
