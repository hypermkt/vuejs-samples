var Vue = require('vue');
var MenuBox = require('./components/menu-box.vue');

$(function() {
  var vm = new Vue({
    el: '#app',
    components: {
      menu_box: MenuBox
    }, 
    data: {
      items: []
    },
    methods: {
      // アイテムを削除
      removeItem: function(item) {
        this.items.$remove(item);
      }, 
    }
  });
});
