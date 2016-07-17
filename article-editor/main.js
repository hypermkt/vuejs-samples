var Vue = require('vue');
var VueValidator = require('vue-validator');
var MenuBox = require('./components/menu-box.vue');
var Item = require('./components/item.vue');

Vue.use(VueValidator);

$(function() {
  var vm = new Vue({
    el: '#app',
    components: {
      menu_box: MenuBox,
      item: Item,
    }, 
    data: {
      items: [
      ]
    },
    events: { addItem: function(index, item) {
        this.items.splice(index, 0, item);
      },
      editItem: function(index, item) {
        this.items.$set(index, item);
      },
      removeItem: function(item) {
        this.items.$remove(item);
      },
      // Up/DownによるItemの移動
      moveItem: function(from, to) {
        var tempItem = this.items[to];
        this.items.$set(to, this.items[from]);
        this.items.$set(from, tempItem);
      }
    }
  });
});
