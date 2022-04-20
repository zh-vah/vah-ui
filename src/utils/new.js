/*
 *new共经历了四个阶段
 *1. 创建一个空对象
 *2. 链接到原型
 *3. 绑定this值（让Func中的this指向obj，并执行Func的函数体。）
 *4. 返回新对象
 */

/*
 *new 用法
 */
function Point(x, y) {
  this.x = x;
  this.y = y;
  function play() {
    console.log("爱打球");
  }
}

var p = new Point(1, 2); // p的值为 {x: 1, y: 2}
console.log(p, "p");


/*
 *new代码实现
 *new是一个操作符 这里实现用方法mynew
 */
function myNew(consturtFun, ...args) {
  if (typeof consturtFun !== "function") {
    throw "fn must be a function";
  }

  const newObj = {};
  newObj.__proto__ = consturtFun.prototype;
  // newObj.fun = consturtFun
  // newObj.fun(...args)
  // delete newObj.fun
  let res = consturtFun.apply(newObj, [...args]);

  let isObject = typeof res === "object" && res !== null;
  console.log(res, "isObject");
  return isObject ? res : newObj;
}
// function _new(fn, ...args) {
//   if(typeof fn !== 'function') {
//     throw 'fn must be a function';
//   }
//   let obj = new Object();
//   obj.__proto__ = Object.create(fn.prototype);
//   let res = fn.apply(obj,  [...args]);

//   let isObject = typeof res === 'object' && res !== null;
//   let isFunction = typeof res === 'function';
//   return isObject || isFunction ? res : obj;
// };

const test = myNew(Point, 1, 2);
console.log(test, "test");
