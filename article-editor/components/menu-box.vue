<template >
  <fieldset class="form-group" v-if="show_menu_box">
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default"
        @click="showTitle">見出し</button>
      <button type="button" class="btn btn-default"
        @click="showBody">本文</button>
      <button type="button" class="btn btn-default"
        @click="showImage">画像</button>
    </div>
    <button
      v-if="has_close_btn"
      @click="show_menu_box=false"
      >閉じる</button>
  </fieldset>

  <fieldset class="form-group" v-if="title_form">
    <legend>見出し入力フォーム</legend>
    <select v-model="type">
      <option value="title">中見出し</option>
      <option value="sub_title">小見出し</option>
    </select>
    <input class="form-control" v-model="title">
    <p>
    <button type="button" class="btn btn-default btn-lg"
      @click="title_form=false">キャンセル</button>
    <button type="button" class="btn btn-default btn-lg"
      @click="addItem('title')">保存</button>
    </p>
  </fieldset>

  <fieldset class="form-group"
    v-if="body_form">
    <legend>本文入力フォーム</legend>
    <textarea class="form-control" rows="3"
      v-model="body"></textarea>
    <p>
    <button type="button" class="btn btn-default btn-lg"
      @click="body_form=false">キャンセル</button>
    <button type="button" class="btn btn-default btn-lg"
      @click="addItem('body')">保存</button>
    </p>
  </fieldset>

  <fieldset class="form-group"
    v-if="image_form">
    <legend>画像投稿</legend>
    <p>画像タイトル</p>
    <input type="text" class="form-control"
    v-model="img_title">
    <div class="row">
      <div class="col-md-4">
        <img src="https://iemo.jp/ngapp/images/bg_add_photo.png" width="300px" class="img-rounded" />
      </div>
      <div class="col-md-8">
        <p>画像URL</p>
        <input type="text" class="form-control"
        v-model="img_src">
        <p>画像説明</p>
        <textarea class="form-control" rows="3"
          v-model="img_body"></textarea>
        <button type="button" class="btn btn-default btn-lg"
          @click="image_form=false">キャンセル</button>
        <button type="button" class="btn btn-default btn-lg"
          @click="addItem('image')">保存</button>
      </div>
    </div>     
  </fieldset>
</template>

<script>
export default {
  data () {
    return {
       title: '',
       body: '',
       img_title: '',
       img_src: '',
       img_body: '',
       type: 'title',
       title_form: false,
       body_form: false,
       image_form: false,
       //show_menu_box: true
    }
  },
  props: ['items', 'has_close_btn', 'show_menu_box'],
  methods: {
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
      this.items.push(item);
      this.closeAllItemForms();
      this.clearItemForm();
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
}
</script>
