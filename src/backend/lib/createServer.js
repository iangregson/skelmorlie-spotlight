import path from 'path'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import serve from 'koa-static'
import KoaRouter from 'koa-router'
import KoaHelmet from 'helmet'
import http from 'http'
import IO from 'socket.io'
import { uniqueId } from 'lodash'

import feeds from '../api/feeds';
import articleApi from '../api/articles'
import responseCalls from '../middleware/responseCalls'

export default async function createServer(opts) {
  const app = new Koa()
  const router = new KoaRouter()
  let server, io

  if (process.env.NODE_ENV === 'production') {
    app.use(convert(serve(path.join(__dirname, '..'))))
    app.use(KoaHelmet())
  }

  app.use(convert(bodyParser()))
  app.use(responseCalls)

  // Get our socket io object onto the context
  app.use(
    (ctx, next) => {
      ctx.io = io
      return next()
    }
  )

  // create article api
  articleApi(router)

  // setup router
  app.use(router.allowedMethods())
  app.use(router.routes())

  // Last middleware returns index.html if GET
  app.use(
    ctx => {
      if (ctx.method === 'GET') {
        ctx.body = 'Welcome to the Skelmorlie Spotlight api server';
        return
      }
    }
  )

  // create the server
  server = http.createServer(app.callback())
  io = server.io = IO(server)

  // create feed consumer
  feeds(io)

  // listen up
  server.listen(opts.port)
}
