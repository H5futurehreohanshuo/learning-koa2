Koa          Express

===================

HTTP 接收 解析 响应

中间件 执行上下文

Application        Context
Request            Response
Middlewares
Session            Cookie

这是重点！
koa-compose 处理 koa 的中间件数组，koa 的中间件是一个数组，并且数组中的每一个元素都是函数。

读源码不要一开始就盯细节！！！

application.js ------------------>start

整个暴露了一个 class 类继承于 Emitter，constructor 里面定义了中间件 middleware、环境变量 env、上下文 context、请求 Request、响应 response。

use 方法：注册中间件
```js
use(fn) {
  this.middleware.push(fn);
  return this;
}
```

listen 方法：利用 http.createServer 启动服务
重点是 createServer 里面传入的 callback，createServer的用法是内部获取到 req 和 res，在 send 出去一些信息
```js
createServer((req, res) => {
  res.send();
})
```
```js
listen(...args) {
  const server = http.createServer(this.callback());
  return server.listen(...args);
}
```

callback 方法：最后 return 出来的 this.handleRequest,里面传入 ctx 和 中间件 fn，所以需要继续弄懂 handleRequest 做了什么
```js
callback() {
  // 上面说过，通过 compose 处理中间件
  const fn = compose(this.middleware);

  const handleRequest = (req, res) => {
    const ctx = this.createContext(req, res);
    return this.handleRequest(ctx, fn);
  };

  return handleRequest;
}
```

handleRequest 方法：先把上下文 ctx 交给中间件执行，把执行完的结果传递给 handleResponse
```js
handleRequest(ctx, fnMiddleware) {
  const res = ctx.res;
  res.statusCode = 404;
  const onerror = err => ctx.onerror(err);
  const handleResponse = () => respond(ctx);
  onFinished(res, onerror);
  return fnMiddleware(ctx).then(handleResponse).catch(onerror);
}
```

respond 方法负责向客户端返回处理好的数据

createContext 方法把用户传入的 response 和 request 也赋给了 context 还有
koa 定义好的 response 和 request，使得变量访问更加方便。

application.js ------------------>end