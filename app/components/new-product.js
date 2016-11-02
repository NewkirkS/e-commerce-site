import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectedCategory: "",
    saveProduct() {
      var params = {
        gamename: this.get('gamename') ? this.get('gamename'): "",
        publisher: this.get('publisher') ? this.get('publisher'): "",
        image: this.get('image') ? this.get('image'): "",
        description: this.get('description') ? this.get('description'): "",
        price: this.get('price') ? this.get('price'): "",
        category: this.get("selectedCategory")
      };
      this.sendAction('saveProduct', params);
      this.set('gamename', "");
      this.set('publisher', "");
      this.set('image', "");
      this.set('description', "");
      this.set('price', "");
    },
    setCategoryType(value) {
      console.log(this.get("selectedCategory"));
      this.set("selectedCategory", value);
    },
  }
});
