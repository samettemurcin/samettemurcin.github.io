import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders About section on home', () => {
  render(
    <MemoryRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      initialEntries={['/']}
    >
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
});
