import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

jest.mock('./routes', () => () => <div>MainRoutes Mock</div>);

describe('App Component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it('renders MainRoutes component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('MainRoutes Mock')).toBeInTheDocument();
  });

  it('has the correct container layout', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const containerElement = screen.getByRole('main');
    expect(containerElement).toHaveClass(
      'flex   h-[100vh] justify-center py-4 bg-slate-200'
    );
  });
});
