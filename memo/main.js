var $ = require('jquery');
var Vue = require('vue');
var moment = require('moment');
Vue.use(require('vue-validator'));

$(function() {
  new Vue({
    el: '#app',
    data: {
      showContentForm: false,
      content: '',
      items: []
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
      }
    }
  });
});
