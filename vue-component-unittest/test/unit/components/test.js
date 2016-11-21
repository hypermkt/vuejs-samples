import Vue from 'vue';
import _Test from '../../../src/js/components/test.vue';

const Test = Vue.extend(_Test);

describe('Testコンポーネント', () => {
  it('メソッドが存在する', () => {
    expect(_Test.methods.myName).to.be.a('function');
    expect(_Test.methods.fetchProfile).to.be.a('function');
  });

  it('vue-routerを利用した場合のテストケース', function() {
    const vm = new Test({
      beforeCreate() {
        this.$route = { params: { name: 'Yamada' } }
      }
    });
    expect(vm.myName()).to.be.eql('Yamada Taro')
  });

  // it('fetchProfileを呼ぶとAPIを実行して、this.profileにnickname情報が入る', (done) => {
  //   let profile = { nickname : 'hoge' };
  //   Vue.http = {
  //     get () {
  //       return Promise.resolve(profile)
  //     }
  //   }
  //
  //   Vue.nextTick(() => {
  //     expect(vm.profile).to.be.eql(profile)
  //     done();
  //   })
  //
  // });
});
