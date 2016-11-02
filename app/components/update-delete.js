import Ember from 'ember';

export default Ember.Component.extend({
  selectedCategory: "",
  currentProduct: "",
  updateProductForm: false,
  newProductForm: true,
    actions: {
      setCategoryType(value) {
        console.log(this.get("selectedCategory"));
        this.set("selectedCategory", value);
      },
      updateProductForm(product) {
        this.set('updateProductForm', true);
        this.set('newProductForm', false);
        this.set('currentProduct', product)
      },
      update() {
        var params = {
          gamename: this.get('gamename'),
          publisher: this.get('publisher'),
          description: this.get('description'),
          image: this.get('image'),
          price: this.get('price'),
          category: this.get('selectedCategory')
        };
        this.set('updateProductForm', false);
        this.set('newProductForm', true);
        this.sendAction('update', this.currentProduct, params);
      },
      saveProduct(params) {
        this.sendAction('saveProduct', params);
      },
      delete(product) {
        this.sendAction('delete', product);
      }
    }
  });
