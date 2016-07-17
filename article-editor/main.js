var Vue = require('vue');
var MenuBox = require('./components/menu-box.vue');
var Item = require('./components/item.vue');

$(function() {
  var vm = new Vue({
    el: '#app',
    components: {
      menu_box: MenuBox,
      item: Item,
    }, 
    data: {
      items: []
    },
    events: {
      'addItem': function(index, item) {
        this.items.splice(index, 0, item);
      },
      'editItem': function(index, item) {
        this.items.$set(index, item);
      },
      'removeItem': function(item) {
        this.items.$remove(item);
      }
    }
  });
});
