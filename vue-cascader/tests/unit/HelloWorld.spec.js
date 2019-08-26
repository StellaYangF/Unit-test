import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const wrapper = shallowMount(HelloWorld, {
            propsData: {
                msg: "hello"
            }
        })
        expect(wrapper.find('#hello').text()).toMatch('hello 乡聚');
    });
});