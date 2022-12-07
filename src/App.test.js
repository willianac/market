import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('se o formulário foi preenchido', () => {
  render(<App />)
  const inputName = screen.getByPlaceholderText('Digite seu nome')
  const button = screen.getByRole('button')


  expect(inputName).toHaveValue('')
  expect(button).toBeDisabled()
  userEvent.type(inputName, 'carlos')
  expect(button).toBeEnabled()
  userEvent.click(button)

});
