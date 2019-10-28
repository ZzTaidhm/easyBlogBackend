const router = require('koa-router')();
const ArticleCtrl = require('../controller/articleCtrl');
router.prefix('/api/v1');

router.post('/chatLine', (ctx) => {
  // `ctx` is the regular koa context created from the `ws` onConnection `socket.upgradeReq` object.
  // the websocket is added to the context on `ctx.websocket`.
  console.log("ctx ==> ", ctx);
  ctx.websocket.send('Hello World');
  ctx.websocket.on('message', function(message) {
    // do something with the message from client
    console.log(message);
  });
})


/**
 * @api {post} /api/v1/article/create 创建文章
 * @apiDescription 创建文章
 * @apiName 创建文章
 * @apiGroup Article
 * @apiParam {string} title 标题
 * @apiParam {string} author 作者
 * @apiParam {string} content 内容
 * @apiParam {string} category 类型
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : 200,
 *      "data" : {
 *          "author": "333"
            "category": "333"
            "content": "333"
            "createdAt": "2019-10-23T02:39:52.000Z"
            "id": 6
            "title": "333"
            "updatedAt": "2019-10-23T02:39:52.000Z"
            "version": 0
 *      }
 *      "msg": "创建文章成功"
 *  }
 * @apiSampleRequest /api/v1/article/create
 * @apiVersion 1.0.0
 */
//创建文章
router.post('/article/create', ArticleCtrl.create);

/**
 * @api {get} /api/v1/article/query 获取文章列表
 * @apiDescription 获取文章列表
 * @apiName 获取文章列表
 * @apiGroup Article
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : 200,
 *      "data" : [
 *
 *      ]
 *      "msg": "创建文章成功"
 *  }
 * @apiSampleRequest /api/v1/article/query
 * @apiVersion 1.0.0
 */
router.get('/article/query', ArticleCtrl.query);

//获取文章详情
router.get('/article/:id', ArticleCtrl.detail);


module.exports = router;
