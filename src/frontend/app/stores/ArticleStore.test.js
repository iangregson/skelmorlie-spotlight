import { ArticleStore as articleStoreClass } from './ArticleStore'
import ArticleStore from './ArticleStore'
import { expect } from 'chai'


describe('ArticleStore', () => {
    it('should create a new instance of the ArticleStore', () => {
        expect(ArticleStore).to.be.instanceof(articleStoreClass)        
    })

    it('should expose a fetchArticles function', () => {
        expect(ArticleStore.fetchArticles).to.be.a('function')        
    })

})
