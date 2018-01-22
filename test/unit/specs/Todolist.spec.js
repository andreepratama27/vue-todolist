import Vue from 'vue';
import Todolist from '@/components/Todolist';

describe('Todolist.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Todolist);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.label').textContent)
        .to.equal('Task');
  });
});
