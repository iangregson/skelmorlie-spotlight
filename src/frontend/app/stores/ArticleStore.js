import { extendObservable } from 'mobx'
import io from 'socket.io-client'

export class ArticleStore {
  constructor({ socket }) {
    this.socket = socket
    this.hashes = []
    extendObservable(this, { articles: [] })
    let self = this
    this.socket.on('newArticle', (newArticle) => {
      this.processNewArticle(newArticle, self)
    })
    this.fetchArticles()
  }

  processNewArticle(newArticle, self) {
      let articleHash = (newArticle.title + newArticle.date).replace(/\s/g, '')
      if (self.hashes.includes(articleHash) === false) {
        self.hashes.push(articleHash)
        self.articles.unshift(newArticle)
      }
  }

  fetchArticles() {
    fetch('/api/articles')
    .then(r => r.json())
    .then(newArticles => { this.articles = newArticles })
  }
}

export default new ArticleStore({ socket: io() });