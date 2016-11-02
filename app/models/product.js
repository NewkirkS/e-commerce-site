import DS from 'ember-data';

export default DS.Model.extend({
  gamename: DS.attr(),
  publisher: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
