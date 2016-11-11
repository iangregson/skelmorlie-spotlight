import { uniqueId } from 'lodash'
import { Feed } from 'scruffy'

export default function feeds (io) {
  const feed = new Feed({ url: 'http://skelmorliespotlight.posthaven.com/posts.atom' })

  const error = (e) => {
    throw new Error(e)
  }

  // Recursively list the top items in the feed
  const listTitles = (n, t) => {
    feed.top(n, t)
    .subscribe(
        i => {
          i.id = uniqueId()
          i.lvl = 'info'
          io.emit('newArticle', i)
        },
        e => error(e),
        d => listTitles(n, t)
    )
  }

  feed.on('loading', (data) => console.log(data))
  feed.on('error', error)
  feed.on('ready', () => listTitles(5, 1))
  feed.init()
}
