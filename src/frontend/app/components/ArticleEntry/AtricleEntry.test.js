import React from 'react';
import ReactDOM from 'react-dom';

import ArticleEntry from './ArticleEntry'

describe('<ArticleEntry /> component', () => {
  it('renders without crashing', () => {
    let article = { article:{ title: 'Test article', description: 'This is the body', lvl: 'info', id: 1 }}
    const div = document.createElement('div')
    const loader = document.createElement('div')
    loader.setAttribute('id', 'loader')
    ReactDOM.render(<ArticleEntry id ={ article.article.id } article={ article }/>, div)
  })
})


