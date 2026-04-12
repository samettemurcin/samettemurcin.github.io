import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders hero heading on home', () => {
  render(
    <MemoryRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      initialEntries={['/']}
    >
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /samet temurcin/i })).toBeInTheDocument();
});
