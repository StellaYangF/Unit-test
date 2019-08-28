import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

import GetData from '@/components/GetData';
import moxios from 'moxios';

describe('测试异步获取数据', () => {
    it('测试获取数据', () => {
        let wrapper = shallowMount(GetData);
        expect(wrapper.text()).to.be.contain('xj');
    })
})

describe('测试异步获取数据', () => {
    beforeEach(function() {
        moxios.install()
    })

    afterEach(function() {
        moxios.uninstall()
    })

    it('测试获取数据', (done) => {
        let wrapper = shallowMount(GetData);
        moxios.stubRequest('/user', {
            status: 200,
            response: { user: 'xiangju' }
        })
        moxios.wait(() => {
            console.log(wrapper.text());
            expect(wrapper.text()).to.be.contain('xiangju');
            done();
        })
    })
})