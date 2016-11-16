import React from 'react'
import { observer } from 'mobx-react'
import FlipMove from 'react-flip-move'

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
        <FlipMove enterAnimation="elevator" leaveAnimation="elevator">
          { this.store.articles.map(article => <ArticleEntry key={ article.id } article={ article } />) }
        </FlipMove>
      </div>
    )
  }
}

export default observer(ArticlesView)
