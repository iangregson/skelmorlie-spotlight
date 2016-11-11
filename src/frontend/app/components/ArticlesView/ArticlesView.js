import React from 'react'
import { observer } from 'mobx-react'

import './ArticlesView.css'

import ArticleEntry from '../ArticleEntry'

export class ArticlesView extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store
  }

  render() {
    return (
      <div className="container">
        { this.store.articles.map(article => <ArticleEntry key={ article.id } article={ article } />) }
      </div>
    )
  }
}

export default observer(ArticlesView)
