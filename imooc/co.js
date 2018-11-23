const co = require('co');
const fetch = require('node-fetch');

// 利用 co 实现，yield 的自动执行
/* co(function *() {
  // 利用 yield 实现代码的暂停运行
  const res = yield fetch('https://api.douban.com/v2/movie/1291843');

  const movie = yield res.json();
  const summary = movie.summary;

  console.log('summary', summary);
}); */

function run (generator) {
  const iterator = generator();
  const it = iterator.next();
  const promise = it.value;
  promise.then(data => {
    const it2 = iterator.next(data);
    const promise2 = it2.value;

    promise2.then(data2 => {
      iterator.next(data2);
    });
  });
}

run(function* () {
  // 利用 yield 实现代码的暂停运行
  const res = yield fetch('https://api.douban.com/v2/movie/1291843');

  const movie = yield res.json();
  const summary = movie.summary;

  console.log('summary', summary);
});