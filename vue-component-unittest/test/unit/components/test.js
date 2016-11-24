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

  it('vue-resourceを利用した場合のテストケース1', (done) => {
    let profile = { nickname : 'hoge' };

    const vm = new Test()
    vm.$Vue.http = {
      get () {
        return Promise.resolve({
          json () { return profile }
        });
      }
    }
    vm.fetchProfile1();
    setTimeout(() => {
      expect(vm.profile).to.be.eql(profile)
      done();
    }, 0)

  });

  it('vue-resourceを利用した場合のテストケース2', (done) => {
    let profile = { nickname : 'hoge' };

    const vm = new Test()
    vm.$Vue.http = {
      get () {
        return Promise.resolve({
          json () { return profile }
        });
      }
    }
    vm.fetchProfile2(function(flag) {
      //expect(flag).to.be.eql(true)
      expect(vm.profile).to.be.eql(profile)
      done();
    });
  });

  it('vue-resourceを利用した場合のテストケース3', (done) => {
    let profile = { nickname : 'hoge' };

    const vm = new Test()
    vm.$Vue.http = {
      get () {
        return Promise.resolve({
          json () { return profile }
        });
      }
    }
    vm.fetchProfile3().then(function() {
      Vue.nextTick(function() {
        expect(vm.profile).to.be.eql(profile);
        done();
      });
    })
  });
});
