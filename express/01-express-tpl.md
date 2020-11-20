### index.js
```js
const express = require('express');
const router = require('./router');
const exphbs = require('express-handlebars');

const server = express();

server.set('port', process.env.PORT || 3000);
// 设置路由
server.use(router);
// 设置 handlebars 视图引擎
server.engine('.hbs', exphbs({extname: '.hbs'}));
server.set('view engine', '.hbs');
// 设置静态资源文件目录
server.use(express.static(__dirname + '/public'));

/**
 * 404 page
 */
server.use((req, res, next) => {
  res.status(404);
  res.render('404');
});

/**
 * 500 page
 */
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

const port = server.get('port');
server.listen(port, () => {
  console.log(`[Express] Server running at http://127.0.0.1:${port}`);
});
```

### router / index.js
```js
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
```