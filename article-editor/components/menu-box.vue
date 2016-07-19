<template >
  <fieldset class="form-group" v-if="show_menu_box">
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default"
        @click="showInputForm('title')">見出し</button>
      <button type="button" class="btn btn-default"
        @click="showInputForm('body')">本文</button>
      <button type="button" class="btn btn-default"
        @click="showInputForm('image')">画像</button>
    </div>
    <button
      v-if="has_close_btn"
      @click="show_menu_box=false"
      >閉じる</button>
  </fieldset>

  <fieldset class="form-group" v-if="title_form">
    <validator name="validation_title_form">
    <legend>見出し入力フォーム</legend>
    <select v-model="title_type">
      <option value="header">中見出し</option>
      <option value="sub_header">小見出し</option>
    </select>
    <input class="form-control"
      v-model="title"
      >
    <p>
    <button type="button" class="btn btn-default btn-lg"
      @click="title_form=false">キャンセル</button>
    <button type="button" class="btn btn-default btn-lg"
      v-if="mode == 'add'"
      @click="addItem('title')">保存</button>
    <button type="button" class="btn btn-default btn-lg"
      v-if="mode == 'edit'"
      @click="editItem('title')">更新</button>
    </p>
    <p class="bg-danger" v-if="$validation_title_form.title.required">タイトルは必須です。</p>
    <p class="bg-danger" v-if="$validation_title_form.title.maxlength">タイトルは30文字以下で入力してください</p>
    </validator>
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
      v-if="mode == 'add'"
      @click="addItem('body')">保存</button>
    <button type="button" class="btn btn-default btn-lg"
      v-if="mode == 'edit'"
      @click="editItem('body')">更新</button>
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
          v-if="mode === 'add'"
          @click="addItem('image')">保存</button>
        <button type="button" class="btn btn-default btn-lg"
          v-if="mode === 'edit'"
          @click="editItem('image')">更新</button>
      </div>
    </div>     
  </fieldset>
</template>

<script>
export default {
  data () {
    return {
       mode: 'add',
       title: '',
       title_type: 'header',
       body: '',
       img_title: '',
       img_src: '',
       img_body: '',
       type: 'title',
       title_form: false,
       body_form: false,
       image_form: false,
    }
  },
  props: ['index', 'has_close_btn', 'show_menu_box'],
  methods: {
    showInputForm: function(kind, item) {
      if (typeof item === 'undefined') {
        this.clearItemForm();
      } else {
        this.title = item.title;
      }
      this.openItemForm(kind);
    },
    // アイテムを追加
    addItem: function(kind) {
      var that = this;
      this.$validate(true, function() {
        console.log(that.$validation_title_form.invalid); 
        if (that.$validation_title_form.invalid) {
          return;
        } 
      });

      var item = this.createItem(kind);
      var index = (typeof this.index === 'undefined') ? 0 : this.index + 1;
      // 固定表示させるメニューボックス以外のメニューボックスは、アイテムが追加されたら閉じる
      if (index > 0) {
        this.show_menu_box = false;
      }
      this.$dispatch('addItem', index, item);
      this.closeAllItemForms();
      this.clearItemForm();
    },
    editItem: function(kind) {
      //console.log(this.$validation_title_form.invalid);
      if (this.$validation_title_form.invalid) {
        return;
      } 
      this.$dispatch('editItem', this.index, this.createItem(kind));
    },
    createItem: function(kind) {
      var item = {};
      item.type = kind;

      if (kind == 'title') {
        item.title = this.title;
        item.title_type = this.title_type;
        item.type = this.type;
      } else if (kind == 'body') {
         item.body = this.body;
      } else if (kind == 'image') {
        item.img_title = this.img_title;
        item.img_body = this.img_body;
        item.img_src = this.img_src;
      }

      return item;
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
  },
  events: {
    startEditing: function(item) {
      this.mode = 'edit'
      this.showInputForm(item.type, item);
    }
  }
}
</script>
