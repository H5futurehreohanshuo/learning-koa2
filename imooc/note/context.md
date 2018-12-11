```js
const proto = module.export = {};
```

context.js 整个文件暴露了一个对象
最关键的是 delegate 方法，通过 delegate 方法可以让 context.js 暴露出的 proto 方法有了 response 和 request 的所有方法。