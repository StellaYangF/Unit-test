import { parser, stringify } from '@/code/parser.js';
import { expect } from 'chai';

// 代码 mocha(测试框架) + chai(断言库)
// 测试一个方法
// 一个用例
// 套件
describe('专门测试parser', () => {
    it('测试parser 是否pass', () => {
        // 深度比较两个对象
        expect(parser('name=乡聚')).to.be.deep.equal({ name: "乡聚" });
    })
});
describe('专门测试stringify', () => {
    it('测试stringify 是否pass', () => {
        // 深度比较两个对象
        expect(stringify({ name: "乡聚" })).to.be.equal("name=乡聚");
    });
});

describe('测试方法', () => {
    it('相等关系', () => {
        expect(1 + 1).to.be.equal(2);
        expect([1, 2, 3]).to.be.lengthOf(3);
        expect(true).to.be.true;
    });
    it('包含', () => {
        expect('xiangju').to.be.contain('xia');
        expect('xiangju').to.be.match(/xia/);
    })
    it('大于 小于', () => {
        expect(5).to.be.greaterThan(3);
        expect(3).to.be.lessThan(5);
        expect(3).to.be.not.greaterThan(10);
    })
})