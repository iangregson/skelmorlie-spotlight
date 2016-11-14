jest.mock('./fetch.mock');

import { ArticleStore as articleStoreClass } from './ArticleStore'
import ArticleStore from './ArticleStore'
import { expect } from 'chai'


describe('ArticleStore', () => {
    it('should create a new instance of the ArticleStore', () => {
        expect(ArticleStore).to.be.instanceof(articleStoreClass)        
    })

    it('should expose a newArticle function', () => {
        expect(ArticleStore.processNewArticle).to.be.a('function')        
    })

    it('the new article function should add an article object and it\'s hash object to the relevant arrays', () => {
        ArticleStore.processNewArticle({ title: 'New article', date: new Date() })
        expect(ArticleStore.hashes).to.have.lengthOf(1)
        expect(ArticleStore.articles).to.have.lengthOf(1)
    })

    it('should expose a fetchArticles function', () => {
        expect(ArticleStore.fetchArticles).to.be.a('function')        
    })

    afterAll(() => {
        setTimeout(() => {
            process.exit()
        }, 500)
    })
})
