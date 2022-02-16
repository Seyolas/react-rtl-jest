import {render,screen} from '@testing-library/react'
import React from 'react'
import Form from '../components/Form'


test('all inputs should be empty by default', () => {
    // const emailInput = screen.getByPlaceholderText(/please Email/i)
    // const emailInput = screen.getByRole('textbox',{
    //     name:/email/i
    // })
    render(<Form/>)

    const emailInput = screen.getByLabelText("email")
    const passwordInput = screen.getByLabelText("password")
    const passwordConfirmInput = screen.getByLabelText("password Confirm")
    
    expect(emailInput.value).toBe("")
    expect(passwordInput.value).toBe("")
    expect(passwordConfirmInput.value).toBe("")

});
