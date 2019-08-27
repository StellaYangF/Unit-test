import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
// import { mount } from '@vue/test-utils';
import Parent from '@/components/Parent';
import Child from '@/components/Child';
// mocha + chai + sinon(mock方法)
import sinon from 'sinon';

describe('当前子组件触发事件时，可以通知父组件', () => {
    it('$emit show', () => {
        // mount这样调用返回的child组件是编译成功后的字符串
        // let wrapper = mount(Parent);
        // expect(wrapper.html()).to.be.equal(2);

        // 解决：shallowMount
        let wrapper = shallowMount(Parent);
        wrapper.setData({ isShow: false });
        expect(wrapper.find('#content').exists()).to.be.false;
        wrapper.find(Child).vm.$emit('show');
        expect(wrapper.find('#content').exists()).to.be.true;
    })
})

describe('测试子组件接受一个函数 点击按钮时调用这个函数', () => {
    let cb = sinon.spy(); //间谍函数
    let wrapper = shallowMount(Child, {
        propsData: { fn: cb }
    });
    wrapper.find('button').trigger('click');
    expect(cb.getCall(0).args[0]).to.be.equal('123');
    expect(cb.callCount).to.be.equal(2);
})