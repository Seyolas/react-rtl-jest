import { Hello } from "../components/hello";
import {render,screen} from '@testing-library/react'
import React from 'react'


describe('Home', () => {
    it('renders a heading', () => {
      render(<Hello />)
  
      const heading = screen.getByRole('heading', {
        name: /hello world/i,
      })
  
      expect(heading).toBeInTheDocument()
      
    })
  })