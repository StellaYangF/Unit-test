import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

import GetData from '@/components/GetData';
import moxios from 'moxios';

// mocha + axios 获取数据 数据不存在 sinon
// mocha + axios = moxios
describe('测试异步获取数据', () => {
    beforeEach(function() {
        // import and pass your custom axios instance to this method
        moxios.install()
    })

    afterEach(function() {
        // import and pass your custom axios instance to this method
        moxios.uninstall()
    })

    // 如果测试异步 有两个方案
    it('测试数据获取', (done) => {
        let wrapper = shallowMount(GetData);
        moxios.stubRequest('/user', {
            status: 200,
            data: { user: '乡聚' }
        });
        moxios.wait(() => {
            expect(wrapper.find('#app').text()).to.be.match(/乡聚/)
            done();
        })
    })
})