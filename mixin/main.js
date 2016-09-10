var Vue = require('vue');
var Header = require('./components/header.vue');
var Footer = require('./components/footer.vue');

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
