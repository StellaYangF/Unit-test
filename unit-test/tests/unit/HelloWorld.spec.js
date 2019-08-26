import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Vue from 'vue';

// 套件
// shallowMount: 不需要子组件的参与可用shallowMount
describe('HelloWorld.vue', () => {
    // 用例
    it('renders props.msg when passed', () => {
        let wrapper = shallowMount(HelloWorld, {
            propsData: {
                msg: "Hello"
            }
        })

        // 断言
        // expect(vm.$el.innerHTML).toBe('乡聚Hello')
        expect(wrapper.find('#hello').text()).toContain('乡聚Hello')
    });
});

describe('HelloWorld.vue', () => {
    // 用例
    it('renders props.msg when passed', () => {
        let Sub = Vue.extend(HelloWorld)
        let vm = new Sub({
            propsData: {
                msg: "Hello"
            }
        });
        vm.$mount();

        // 断言
        // expect(vm.$el.innerHTML).toBe('乡聚Hello')
        expect(vm.$el.innerHTML).toContain('乡聚Hello')
    });
});