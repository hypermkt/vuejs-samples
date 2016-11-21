import Vue from 'vue';
import _Test from '../../../src/js/components/test.vue';

const Test = Vue.extend(_Test);

describe('Testコンポーネント', () => {
  it('メソッドが存在する', () => {
    expect(_Test.methods.myName).to.be.a('function');
  });

  it('vue-routerを利用した場合のテストケース', function() {
    const vm = new Test({
      beforeCreate() {
        this.$route = { params: { name: 'Yamada' } }
      }
    });
    expect(vm.myName()).to.be.eql('Yamada Taro')
  });

  // AssertionError: expected {} to deeply equal { nickname: 'hoge' } (node_modules/chai/chai.js:210)
  it('vue-resourceを利用した場合のテストケース1', (done) => {
    let profile = { nickname : 'hoge' };
    Vue.http = {
      get () {
        return Promise.resolve(profile)
      }
    }

    const vm = new Test()
    vm.fetchProfile1();
    Vue.nextTick(() => {
      expect(vm.profile).to.be.eql(profile)
      done();
    })

  });

  // timeout of 2000ms exceeded. Ensure the done() callback is being called in this test.
  it('vue-resourceを利用した場合のテストケース2', (done) => {
    let profile = { nickname : 'hoge' };
    Vue.http = {
      get () {
        return Promise.resolve(profile)
      }
    }

    const vm = new Test()
    vm.fetchProfile2(function(flag) {
      //expect(flag).to.be.eql(true)
      expect(vm.profile).to.be.eql(profile)
      done();
    });
  });

  // timeout of 2000ms exceeded. Ensure the done() callback is being called in this test.
  it('vue-resourceを利用した場合のテストケース3', (done) => {
    let profile = { nickname : 'hoge' };
    Vue.http = {
      get () {
        return Promise.resolve(profile)
      }
    }

    const vm = new Test()
    vm.fetchProfile3().then(function() {
      Vue.nextTick(function() {
        expect(vm.profile).to.be.eql(profile);
        done();
      });
    })
  });
});
