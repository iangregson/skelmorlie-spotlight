import { React, shallow, mount, expect, assert, jsdom } from '../../../testHelpers'

import Header from './Header'

describe('<Header /> component', () => {
  const HeaderComponent = shallow(<Header />)
  it('should render without exploding anything', () => {
    expect(HeaderComponent).to.be.ok
    expect(HeaderComponent).to.have.length(1)
    expect(HeaderComponent.find('header')).to.have.length(1)
  })
})