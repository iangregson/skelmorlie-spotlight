import React from 'react'
import cx from 'classnames'
import { Accordion, Icon } from 'semantic-ui-react'
import EventEmitter from 'events'

import './ArticleEntry.css'

const globalEvents = new EventEmitter()

globalEvents.on('articleEntryLoaded', () => {
    document.getElementById('loader').classList.add('loaded')
})

export default class ArticleEntry extends React.Component {
  componentDidMount() {
    globalEvents.emit('articleEntryLoaded')
  }

	render() {
		return (
      <div className={ cx('article-entry', this.props.article.lvl ) }>
        <Accordion>
          <Accordion.Title>
            <Icon name='dropdown' />
            <span className="message title">{ this.props.article.title }</span>
          </Accordion.Title>
          <Accordion.Content>
            <span className="message body" dangerouslySetInnerHTML={{ __html: this.props.article.description }}></span>
          </Accordion.Content>
        </Accordion>
      </div>
		)
	}
}
