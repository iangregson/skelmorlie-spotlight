import React from 'react';
import ReactDOM from 'react-dom';

import { ArticlesView } from './ArticlesView'

describe('<ArticlesView /> component', () => {
    
    it('renders without crashing assuming it has an array of articles', () => {
        let articleArray = { articles: [{ id: 1, msg: 'Test', lvl: 'info' }] }
        const div = document.createElement('div')
        ReactDOM.render(<ArticlesView store={ articleArray } />, div)
    })
})
