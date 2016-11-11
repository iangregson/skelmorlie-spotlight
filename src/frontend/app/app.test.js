import { React, shallow, mount, expect, assert, jsdom } from '../testHelpers'

import App from './App'

describe('Test setup', () => {

  describe('Globals', () => {
    it('should have a document ', () => {
      expect(global.document).to.exist
    })
    it('should have a window', () => {
      expect(global.window).to.exist
    })
    it('should have a navigator', () => {
      expect(global.navigator).to.exist
    })
    it('should have a localStorage', () => {
      expect(global.localStorage).to.exist
    })
  })

  describe('<App />', () => {
    const AppComponent = shallow(<App />)
    it('should render wihtout exploding anything', () => {
      expect(AppComponent).to.be.ok
      expect(AppComponent).to.have.length(1)
      expect(AppComponent.find('Header')).to.have.length(1)
    })
    it('should have a header component', () => {
      expect(AppComponent.find('Header')).to.have.length(1)
    })
  })

})
