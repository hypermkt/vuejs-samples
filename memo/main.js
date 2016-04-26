var $ = require('jquery');
var Vue = require('vue');
var moment = require('moment');
Vue.use(require('vue-validator'));

$(function() {
  new Vue({
    el: '#app',
    data: {
      order: 1,
      search: '',
      showContentForm: false,
      content: '',
      items: [],
      editingItem: null
    },
    methods: {
      changeDisplayState: function(state) {
        this.showContentForm = state;
      },
      addItem: function() {
        this.items.push({
          content: this.content,
          createdAt: moment().format('YYYY/MM/DD HH:mm:ss')
        });
      },
      removeItem: function(item) {
        this.items.$remove(item);
      },
      editItem: function(item) {
        this.editingItem = item;
      },
      saveItem: function() {
        // TODO: 該当アイテムを更新する
        this.editingItem = null;
      }
    }
  });
});
