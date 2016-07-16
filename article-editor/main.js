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
    methods: {
    }
  });
});
