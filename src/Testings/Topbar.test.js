import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TopBar from './TopBar';

describe('TopBar', () => {
  test('renders the app title', () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    );
    const titleElement = screen.getByText(/Rakusens/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('searches for a term when search button is clicked', () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    );
    const searchButton = screen.getByRole('button', { name: /search/i });
    const searchInput = screen.getByPlaceholderText(/search here/i);
    fireEvent.change(searchInput, { target: { value: 'chocolate' } });
    fireEvent.click(searchButton);
    expect(searchInput).toHaveValue('chocolate');
  });

  test('toggles color mode when color mode button is clicked', () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    );
    const colorModeButton = screen.getByRole('button', { name: /toggle color mode/i });
    fireEvent.click(colorModeButton);
    const darkModeIcon = screen.getByRole('button', { name: /dark mode/i });
    expect(darkModeIcon).toBeInTheDocument();
  });

  test('navigates to settings page when settings button is clicked', () => {
    const { history } = render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    );
    const settingsButton = screen.getByRole('button', { name: /settings/i });
    fireEvent.click(settingsButton);
    expect(history.location.pathname).toBe('/Settings');
  });
});