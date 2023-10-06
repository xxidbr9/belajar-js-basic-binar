import { render, screen } from '@testing-library/react'
import Home from '../page'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders home perfectly', () => {
    render(<Home />)

    const heading = screen.getByTestId("test-paragraph")

    expect(heading).toBeInTheDocument()
  })
})