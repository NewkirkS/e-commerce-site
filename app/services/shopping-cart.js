import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  currentTotal: 0,
  add(product) {
    this.get('products').pushObject(product);
    this.get('updateTotal')(this);
  },

  updateTotal: function(context) {
    var total = 0;
    context.get('products').forEach(function(product) {
      total+= parseInt(product.get('price'));
    }.bind(total));
    context.set("currentTotal", total);
  }

});
