import Vue from 'vue';
import Header from './components/header.vue';
import Footer from './components/footer.vue';

new Vue({
  el: '#app',
  components: {
    // header, footerは予約後のため使えない
    common_header: Header,
    common_footer: Footer,
  }, 
  data: {
    message: 'Hello Vue.js'
  }
});
