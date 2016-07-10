var Vue = require('vue');
$(function() {
  new Vue({
    el: '#app',
      data: {
        title: '',
        body: '',
        img_title: '',
        img_src: '',
        img_body: '',
        type: 'title',
        title_form: false,
        body_form: false,
        image_form: false,
        items: []
      },
      methods: {
        addItem: function(form_kind) {
          var item = {};
          item.type = form_kind;
          if (form_kind == 'title') {
            item.title = this.title;
            item.type = this.type;
          } else if (form_kind == 'body') {
            item.body = this.body;
          } else if (form_kind == 'image') {
            item.img_title = this.img_title;
            item.img_body = this.img_body;
            item.img_src = this.img_src;
          }
          console.log(item);
          this.items.push(item);
        },
        removeItem: function(item) {
          this.items.$remove(item);
        }, 
        showTitle: function() {
          this.title_form = true; 
          this.body_form = false; 
          this.image_form = false; 
        },
        showBody: function() {
          this.title_form = false; 
          this.body_form = true; 
          this.image_form = false; 
        },
        showImage: function() {
          this.title_form = false; 
          this.body_form = false; 
          this.image_form = true; 
        }
      }
  });
});
