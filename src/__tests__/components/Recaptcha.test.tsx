import { render, screen } from '@testing-library/react';
import Recaptcha from '../../components/Recaptcha';

jest.mock('react-google-recaptcha', () => {
  return ({ sitekey, onChange }: any) => (
    <div data-testid='recaptcha-mock'>
      <button onClick={() => onChange('test-token')}>Verify</button>
    </div>
  );
});

describe('Recaptcha Component', () => {
  it('renders without crashing', () => {
    render(<Recaptcha onChange={() => {}} />);
    expect(screen.getByTestId('recaptcha-mock')).toBeInTheDocument();
  });

  it('calls onChange with token when reCAPTCHA is successful', () => {
    const mockOnChange = jest.fn();
    render(<Recaptcha onChange={mockOnChange} />);

    const verifyButton = screen.getByText('Verify');
    verifyButton.click();

    expect(mockOnChange).toHaveBeenCalledWith('test-token');
  });
});
