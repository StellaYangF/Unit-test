import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue';

describe('HelloWorld.vue', () => {
    it('pass props', () => {
        let Sub = Vue.extend(HelloWorld);
        let vm = new Sub({
            propsData: { msg: '乡聚' }
        }).$mount();
        expect(vm.$el.querySelector('h1').innerHTML).to.be.contain('乡聚')
    })
})


describe('HelloWorld.vue', () => {
    it('pass props with chai grammar', () => {
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg: "乡聚" }
        })
        expect(wrapper.find('h1').text()).to.be.contain('乡聚')
    })
})