<template>
    <h2 v-if="item.type=='title' && item.title_type == 'header' && item.title != ''">{{ item.title }}</h2>
    <h3 v-if="item.type=='title' && item.title_type == 'sub_header' && item.title != ''">{{ item.title }}</h3>
    <p v-if="item.type=='body' && item.body != ''">{{ item.body }}</p>

    <div v-if="item.type=='image'">
      <h3>{{ item.img_title }}</h3>
      <div class="row">
        <div class="col-md-4">
          <img v-bind:src="item.img_src" width="300px" class="img-rounded" />
        </div>
        <div class="col-md-8">
          <p>{{ item.img_body }}</p>
        </div>
      </div>
    </div>

    <button @click="show_menu_box=true">追加</button>
    <button @click="editItem(item)">編集</button>
    <button
      v-if="index > 0" // 最上部の場合は表示しない
      @click="moveItem('up')"
      >↑</button>
    <button
      v-if="items.length -1 != index" // 最下部の場合は表示しない
      @click="moveItem('down')"
      >↓</button>
    <button @click="removeItem(item)">削除</button>

    <menu_box
      :items.sync="items"
      :show_menu_box.sync=show_menu_box
      :index=index
      has_close_btn=true
    ></menu_box>   

</template>

<script>
import MenuBox from './menu-box.vue'

export default {
  props: ['item', 'items', 'index'],
  components: {
    menu_box: MenuBox
  },
  data () {
    return {
      show_menu_box: false
    }
  },
  methods: {
    moveItem: function(mode) {
      var to = (mode == 'up') ? this.index - 1 : this.index + 1;
      this.$dispatch('moveItem', this.index, to);
    },
    editItem: function(item) {
      this.$broadcast('startEditing', item);
    },
    removeItem: function(item) {
      this.$dispatch('removeItem', item);
    },
  }
}
</script>
