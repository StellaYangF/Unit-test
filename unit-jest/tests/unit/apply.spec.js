import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld';

describe('HelloWorld.vue', () => {
    it('相等', () => {
        expect(1 + 1).toBe(2);
        expect({ name: "乡聚" }).toEqual({ name: "乡聚" });
        expect([1, 2, 3]).toHaveLength(3);
    });
    it('大于 小于', () => {
        expect(3).toBeGreaterThan(2);
        expect(2).toBeLessThan(3);
    });
    it('包含', () => {
        expect('xiangju').toContain('xia');
    })
})