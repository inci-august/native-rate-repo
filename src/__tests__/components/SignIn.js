import { render, screen, fireEvent, waitFor } from '@testing-library/react-native'
import { SignInFormContainer } from '../../components/SignIn'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn()
      render(<SignInFormContainer onSubmit={onSubmit} />)

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'august')
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'secret')
      fireEvent.press(screen.getByText('Sign in'))

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)

        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'august',
          password: 'secret',
        })
      })
    })
  })
})
