import { shallowMount } from '@vue/test-utils';
import GetData from '@/components/GetData';
import Vue from 'vue';

jest.mock('axios'); //默认再去调用get方法 使用axios方法
describe('jest 测试 mock axios', () => {
    it('mock的axios', () => {
        let wrapper = shallowMount(GetData);
        // 等待下一个队列再调用
        return Vue.nextTick().then(() => {
            expect(wrapper.text()).toMatch('乡聚')
        })
    })
})