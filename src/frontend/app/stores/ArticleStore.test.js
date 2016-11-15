import { ArticleStore as articleStoreClass } from './ArticleStore'
import ArticleStore from './ArticleStore'
import { expect } from 'chai'

const newArticle = { id: 1, title: 'New article', date: new Date() }

describe('ArticleStore', () => {
    it('should create a new instance of the ArticleStore', () => {
        expect(ArticleStore).to.be.instanceof(articleStoreClass)        
    })

    it('should expose a fetchArticles function', () => {
        expect(ArticleStore.fetchArticles).to.be.a('function')        
    })

    it('should expose a processNewArticle function', () => {
        expect(ArticleStore.processNewArticle).to.be.a('function')        
    })

    it('processNewArticle should add the article and it\'s ID to the relevant arrays', () => {
        ArticleStore.processNewArticle(newArticle)
        expect(ArticleStore.hashes).to.be.a('array').to.have.length(1)
        expect(ArticleStore.articles).to.have.length(1)
    })

    it('handles a newArticle event', () => {
        ArticleStore.socket.emit('newArticle', newArticle)
    })

})
