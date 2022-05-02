/*
 *promise
 *基本用法
 */

//  const promise = new Promise(function(resolve, reject) {
//   // ... some code

//   if (true){
//     resolve(value);
//   } else {
//     reject(error);
//   }
// });

// then的用法
// let promise = new Promise((resolve, reject) => {
//   resolve('这次一定')
//   reject('下次一定')
// })

// promise.then(
//   result => {
//       console.log('fulfilled', result);
//   },
//   reason => {
//       console.log('rejected', reason.message);
//   }
// )

/*
 *代码实现
 */

class MyPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(fun) {
    this.promiseState = MyPromise.PENDING;
    // 用于多次调用then时的情况
    this.onFulfilledCallbacks = []; // 保存成功回调
    this.onRejectedCallbacks = []; // 保存失败回调

    try {
      fun(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }
  resolve(result) {
    if (this.promiseState === MyPromise.PENDING) {
      setTimeout(() => {
        this.promiseState = MyPromise.FULFILLED;
        this.result = result;
        // 将保存的回调函数依次执行
        this.onFulfilledCallbacks.forEach((callback) => {
          callback(result);
        });
      });
    }
  }
  reject(reason) {
    if (this.promiseState === MyPromise.PENDING) {
      setTimeout(() => {
        this.promiseState = MyPromise.REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => {
          callback(reason);
        });
      });
    }
  }
  then(onFulfilled, onRejected) {
    // if (typeof onFulfilled !== "function") return this.result;
    // if (typeof onRejected !== "function") throw this.reason;
    onFulfilled =
      typeof onFulfilled !== "funciton" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected !== "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    // 在resolve和reject为异步时，将回调函数存储起来
    if (this.promiseState === MyPromise.PENDING) {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
    if (this.promiseState === MyPromise.FULFILLED) {
      setTimeout(() => {
        console.log("this", this);
        onFulfilled(this.result);
      });
    } else if (this.promiseState === MyPromise.REJECTED) {
      setTimeout(() => {
        onRejected(this.reason);
      });
    }
  }
}

/*
 * 实例
 */
const promise1 = new MyPromise(function (resolve, reject) {
  console.log(2);
  setTimeout(() => {
    console.log("A", promise1.promiseState);
    resolve("这次一定");
    console.log("B", promise1.promiseState);
    console.log(4);
  });
});

promise1.then(
  (result) => {
    console.log("C1", promise1.promiseState);
    console.log("fulfilled:", result);
  },
  (reason) => {
    console.log("rejected:", reason);
  }
);

promise1.then(
  (result) => {
    console.log("C2", promise1.promiseState);
    console.log("fulfilled:", result);
  },
  (reason) => {
    console.log("rejected:", reason);
  }
);