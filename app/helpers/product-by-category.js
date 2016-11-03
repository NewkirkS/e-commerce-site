import Ember from 'ember';

export function productByCategory(params, category/*, hash*/) {
  var results = [];
    params.forEach (function(product){
      if (category === product.category) {
        results.push(product);
        console.log(results);
      }
    });
  return results;
}

export default Ember.Helper.helper(productByCategory);
