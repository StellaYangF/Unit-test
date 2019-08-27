export let parser = str => {
    let obj = {};
    str.replace(/([^&=]*)=([^&=]*)/g, (...args) => {
        obj[args[1]] = args[2];
    });
    return obj;
}
export let stringify = obj => {
    let arr = [];
    for (let key in obj) {
        arr.push(`${key}=${obj[key]}`);
    }
    return arr.join('&');
}

// 原始测试方式：
// console.log(parser('name=乡聚')); 
// console.log(parser('name=1'));
//{ name: '乡聚' }

// 弊端：
// 前端测试不会保留测试代码
// 测试代码混在源码中