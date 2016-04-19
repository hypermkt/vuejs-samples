$(function() {
  new Vue({
    el: '#app',
    data: {
      showContentForm: false,
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
