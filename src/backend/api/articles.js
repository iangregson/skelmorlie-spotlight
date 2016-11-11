const articles = []
let __id = 1

export function getArticles(ctx) {
  ctx.ok(articles)
}

export function addArticle(ctx) {
  // format post nicely

  if (!ctx.request.body) {
    ctx.badRequest('Request did not contain a body')
    return
  }

  const obj = {
    msg: ctx.request.body.msg,
    ts: ctx.request.body.ts || Date.now(),
    lvl: ctx.request.body.lvl || 'info',
    id: __id++,
    data: ctx.request.body.data
  }

  articles.unshift(obj)
  ctx.status = 201;
  ctx.io.emit('newArticle', obj)
}

// Set up routes

export default function articleApi(router) {
  router
  .get('/api/articles', getArticles)
  .post('/api/articles', addArticle)
}
