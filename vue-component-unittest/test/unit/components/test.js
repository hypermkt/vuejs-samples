import Vue from 'vue';
import _Test from '../../../src/js/components/test.vue';

const Test = Vue.extend(_Test);

describe('Testコンポーネント', () => {
  it('メソッドが存在する', () => {
    expect(_Test.methods.myName).to.be.a('function');
    expect(_Test.methods.fetchProfile).to.be.a('function');
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
