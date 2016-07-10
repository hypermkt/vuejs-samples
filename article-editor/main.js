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
        // アイテムを追加
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
          this.closeAllItemForms();
          this.clearItemForm();
        },
        // アイテムを削除
        removeItem: function(item) {
          this.items.$remove(item);
        }, 
        showTitle: function() {
          this.clearItemForm();
          this.openItemForm('title');
        },
        showBody: function() {
          this.clearItemForm();
          this.openItemForm('body');
        },
        showImage: function() {
          this.clearItemForm();
          this.openItemForm('image');
        },
        // 指定されたアイテム入力フォームを開く
        openItemForm: function(kind) {
          this.title_form = (kind == 'title')
          this.body_form = (kind == 'body')
          this.image_form = (kind == 'image')
        },
        closeAllItemForms: function() {
          this.title_form = this.body_form = this.image_form = false;
        },
        // 入力フォームの中身を全て初期化する
        clearItemForm: function() {
          this.type = 'title';
          this.title = '';
          this.body = '';
          this.img_title = '';
          this.img_src = '';
          this.img_body = '';
        }
      }
  });
});
