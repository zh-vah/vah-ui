/**
 * 发布订阅的实现
 * addEventListen就是一个最简单的发布订阅器
 */
export class MyEventEmitter {
  constructor() {
    // eventMap用来存储事件和监听函数之间的关系
    this.eventMap = {};
  }

  /**
   * @param type 这里代表事件名称
   * @param handler 处理函数，必须是一个函数，如果不是直接报错
   */
  on(type, handler) {
    if (!(handler instanceof Function)) {
      throw new Error("handle必须是一个函数");
    }
    // 判断type事件对应的队列是否存在, 若不存在则新建队列
    if (!this.eventMap[type]) {
      this.eventMap[type] = [];
    }
    // 若存在，直接往队列里推入handle
    this.eventMap[type].push(handler);
  }

  /**
   * @param type 触发的事件名称
   * @param parmas 触发时携带数据的载体
   */
  emit(type, parmas) {
    if (this.eventMap[type]) {
      this.eventMap[type].forEach((handler, index) => {
        handler(parmas);
      });
    }
  }

  /**
   * @param type 取消订阅的事件名称
   * @param handler
   */
  off(type, handler) {
    if (this.eventMap[type]) {
      this.eventMap[type].splice(this.eventMap[type].indexOf(handler) >>> 0, 1);
    }
  }
}

// const myEvent = new MyEventEmitter();

// const testHandler = function (parmas) {
//   console.log(`test事件被出发了，${parmas}`);
// };

// myEvent.on("test", testHandler);

// myEvent.emit("test", "我是emit的参数");
