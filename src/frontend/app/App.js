// Libs
import React from 'react'

// Styles
import './App.css'

// Components
import Header from './components/Header'
import ArticlesView from './components/ArticlesView'

// Stores
import articles from './stores/ArticleStore'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ArticlesView store={ articles } />
      </div>
    )
  }
}

export default App