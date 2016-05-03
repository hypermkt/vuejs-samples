var $ = require('jquery');
var Vue = require('vue');
var Modal = require('./components/modal.vue');

$(function() {
  new Vue({
    el: '#app',
    data: {
      selectedIndex: null,
      master_items: [
        { id: 1, title: 'hoge A' },
        { id: 2, title: 'hoge B' },
        { id: 3, title: 'hoge C' },
        { id: 4, title: 'hoge D' },
        { id: 5, title: 'hoge E' }
      ],
      items: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      showModal: false
    },
    components: {
      modal: Modal
    },
    methods: {
      openList: function(index) {
        this.showModal = true;
        this.selectedIndex = index;
      },
      save: function() {
        console.log(JSON.stringify(this.items));
      }
    },
    events: {
      'select-item' : function(item) {
        this.items.$set(this.selectedIndex, {
          id: item.id,
          title: item.title
        });
      }
    }
  });
});
