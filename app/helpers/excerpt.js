import Ember from 'ember';

// export default Ember.Helper.helper(function(description) {
//   //var shortDescription = description[0].slice(0, 10);
//   console.log(description[0]);
//   return shortDescription[0] + "...";
// });


export function excerpt(params) {
  var description = params[0];
  return String(description).slice(0, 100) + "...";
}

export default Ember.Helper.helper(excerpt);
