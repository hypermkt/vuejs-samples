var $ = require('jquery');
var Vue = require('vue');
var Modal = require('./components/modal.vue');

$(function() {
  new Vue({
    el: '#app',
    data: {
      master_items: [
        { id: 1, title: 'hoge A' },
        { id: 2, title: 'hoge B' },
        { id: 3, title: 'hoge C' },
        { id: 4, title: 'hoge D' },
        { id: 5, title: 'hoge E' }
      ],
      items: [
        { rank: 1, id: null },
        { rank: 2, id: null },
        { rank: 3, id: null },
        { rank: 4, id: null },
        { rank: 5, id: null },
        { rank: 6, id: null },
        { rank: 7, id: null },
        { rank: 8, id: null },
        { rank: 9, id: null },
        { rank: 10, id: null }
      ],
      showModal: false
    },
    components: {
      modal: Modal
    },
    methods: {
      openList: function() {
        this.showModal = true;
      }
    }
  });
});
