import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return Ember.RSVP.hash ({
          categories: this.store.findAll('category'),
          products: this.store.findAll('product'),
      });
    },
    actions: {
      saveProduct(params) {
        var newProduct = this.store.createRecord('product', params);
        var category = params.category;
        category.get('products').addObject(newProduct);
        newProduct.save().then(function(){
          return category.save();
        });
      }
    }
});
