<template>
  <div>
  name: {{ this.myName() }}
  nickname: {{ profile.nickname }}
  </div>
</template>

<script>
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

export default {
  data() {
    return {
      profile: {}
    }
  },
  computed: {
    $Vue() { return Vue; }
  },
  methods: {
    myName() {
      return this.$route.params.name + ' Taro';
    },
    fetchProfile1() {
      Vue.http.get('http://localhost:8000/api/profile').then((response) => {
        console.log("success");
        this.profile = response.json();
      }, (response) => {
        console.log("failure");
      });
    },
    fetchProfile2: function(done) {
      Vue.http.get('http://localhost:8000/api/profile').then((response) => {
        console.log("success");
        this.profile = response.json();
        if (typeof done === "function") done(true); // for test
      }, (response) => {
        console.log("failure");
        if (typeof done === "function") done(false); // for test
      });
    },
    fetchProfile3: function(done) {
      return Vue.http.get('http://localhost:8000/api/profile').then((response) => {
        console.log("success");
        this.profile = response.json();
      });
    },
  }
}
</script>
