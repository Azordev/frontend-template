/* eslint-disable no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'

describe('App', () => {
  it('Home component renders correctly', () => {
    const tree = render(<Home />)
    expect(tree).toMatchSnapshot()
  })

  it('Verify if data test id exist on snapshot', () => {
    const { getByTestId } = render(<Home />)
    const element = getByTestId(/h1:mainTittle/)
    expect(element).toBeInTheDocument()
  })

  it('text is in the document', () => {
    const { getByText } = render(<Home />)
    const linkElement = getByText(/Hello, world!/)
    expect(linkElement).toBeInTheDocument()
  })
})
