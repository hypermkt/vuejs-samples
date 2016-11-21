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
  methods: {
    myName() {
      return this.$route.params.name + ' Taro';
    },
    fetchProfile() {
      Vue.http.get('http://localhost:8000/api/profile').then((response) => {
        console.log("success");
        this.profile = response.json();
      }, (response) => {
        console.log("failure");
      });
    }
  }
}
</script>
