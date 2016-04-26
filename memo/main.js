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
      editingItem: null,
      editedContent: ''
    },
    methods: {
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
      saveItem: function(item) {
        item.content = this.editedContent
        this.editingItem = null;
      }
    }
  });
});
