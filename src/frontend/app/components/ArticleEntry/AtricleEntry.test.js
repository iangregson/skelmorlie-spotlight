import { React, shallow, mount, expect, assert, jsdom } from '../../../testHelpers'

import ArticleEntry from './ArticleEntry'

describe('<ArticleEntry /> component', () => {
  const article = { title: 'Test message', lvl: 'info', id: 1, ts: Date.now() }
  const ArticleEntryComponent = shallow(<ArticleEntry key={ article.id } article={ article } />)
  it('should render without exploding anything', () => {
    expect(ArticleEntryComponent).to.be.ok
    expect(ArticleEntryComponent).to.have.length(1)
    expect(ArticleEntryComponent.find('Accordion').find('Accordion.Content')).to.be.ok
  })
})