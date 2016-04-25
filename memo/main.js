var $ = require('jquery');
var Vue = require('vue');
var VueValidator = require('vue-validator');
Vue.use(VueValidator);

$(function() {
  new Vue({
    el: '#app',
    data: {
      showContentForm: false,
      content: '',
      items: [
        { content: 'コンテント', createdAt: 'yyyy/mm/dd' }
      ]
    },
    methods: {
      changeDisplayState: function(state) {
        this.showContentForm = state;
      },
      addItem: function() {
        this.items.push({
          content: this.content,
          createdAt: 'yyyy/mm/dd'
        });
      }
    }
  });
});
