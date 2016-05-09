var Vue = require('vue');
var Modal = require('./components/modal.vue');
var vueDragAndDrop = require('vue-drag-and-drop');
Vue.use(vueDragAndDrop);

$(function() {
  new Vue({
    el: '#app',
    data: {
      selectedIndex: null,
      master_items: [
        { id: 1, title: 'りんご' },
        { id: 2, title: 'メロン' },
        { id: 3, title: 'いちご' },
        { id: 4, title: 'パイナップル' },
        { id: 5, title: 'もも' }
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
      },
      handleDrop: function(itemOne, itemTwo) {
        var dummy = this.items[itemOne.id];
        this.items.$set(itemOne.id, this.items[itemTwo.id]);
        this.items.$set(itemTwo.id, dummy);
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
