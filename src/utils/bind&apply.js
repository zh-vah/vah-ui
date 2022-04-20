/*
 *call实现  call直接调用
 */
Function.prototype.mycall = function(context, ...args) {
  console.log(args, 'mycall');
  context = context || window;
  const key = Symbol();
  // 用隐式绑定的方法进行绑定
  context[key] = this;
  console.log(this, 'this');
  const result = context[key](...args);
  delete context[key];
  return result;
};

/*
 *apply实现，apply接收一个数组，相比于call传参不一样
 */
 Function.prototype.myapply = function(context, args) {
  context = context || window;
  args = args? args : [];
  const key = Symbol();
  // 用隐式绑定的方法进行绑定
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};


/*
 *bind实现  bind返回一个新的方法。
 *bind就是将call的方法包装，但需要注意在bind后使用new会忽略bind的作用，重写绑定一个对象
 */
Function.prototype.mybind = function(context, ...args) {
  return function() {
    this.apply(context, [...args])
  }
};

// Function.prototype.myBind = function (context, ...args) {
//   const fn = this
//   args = args ? args : []
//   return function newFn(...newFnArgs) {
//       if (this instanceof newFn) {
//           return new fn(...args, ...newFnArgs)
//       }
//       return fn.apply(context, [...args,...newFnArgs])
//   }
// }


/*
 *实例测试
 */
class Animal {
  name(x,y) {
    console.log("sdds", x,y);
  }
}

const cat = new Animal()
// console.log(cat.name, 'cat.name');
const bindTest = cat.name.bind(window, [2,3,4])
console.log(bindTest, bindTest(), 'bindTest');

