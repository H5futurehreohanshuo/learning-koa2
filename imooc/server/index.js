const Koa = require('koa');
console.log(Koa);
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'Hi Luke';
});

app.listen(2333);