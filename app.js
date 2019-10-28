const Koa = require('koa');
const websockify = require('koa-websocket');
const app = websockify(new Koa())
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const index = require('./routes/index')
const users = require('./routes/users')
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
// koa 封装的websocket
// app.ws.use(function (ctx, next) {
//   return next(ctx);
// });
 let ctxs = [];
 app.ws.use((ctx, next) => {
   ctxs.push(ctx);
   ctx.websocket.on("message", (message) => {
     console.log(message);
     for(let i = 0; i < ctx.length; i++){
       if(ctx== ctxs[i]) continue;
       ctxs[i].websocket.send(message);
     }
   })
 })

// app.ws.use(index.routes(), index.allowedMethods());
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
