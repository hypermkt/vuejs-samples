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
      // アイテムを挿入する
      insertItem: function(index) {
        menuBox.$appendTo('#app');
//          this.items.splice((index + 1), 0, {
//            type: 'title',
//            title: 'hoge'
//          });
      },
      // アイテムを削除
      removeItem: function(item) {
        this.items.$remove(item);
      }, 
    }
  });
});
