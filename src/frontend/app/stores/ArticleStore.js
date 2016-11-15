import { extendObservable } from 'mobx'
import io from 'socket.io-client'

export class ArticleStore {
  constructor({ socket }) {
    this.socket = socket
    this.hashes = []
    extendObservable(this, { articles: [] })
    this.socket.on('newArticle', (newArticle) => {
      this.processNewArticle(newArticle)
    })
    this.fetchArticles()
  }

  processNewArticle(newArticle) {
      let articleHash = (newArticle.title + newArticle.date).replace(/\s/g, '')
      if (this.hashes.includes(articleHash) === false) {
        this.hashes.push(articleHash)
        this.articles.unshift(newArticle)
      }
  }

  fetchArticles() {
    fetch('/api/articles')
    .then(r => r.json())
    .then(newArticles => { this.articles = newArticles })
  }
}

export default new ArticleStore({ socket: io() });