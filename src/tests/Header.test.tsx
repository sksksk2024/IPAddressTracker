import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import { Header } from '../components/Header';

vi.mock('axios'); // Mock axios

describe('Header Component', () => {
  test('renders correctly', () => {
    render(<Header />);
    expect(screen.getByText('IP Address Tracker')).toBeInTheDocument();
  });

  test('updates the input value when typed into', () => {
    render(<Header />);
    const input = screen.getByPlaceholderText(
      'Search for any IP address or domain'
    );
    fireEvent.change(input, { target: { value: '192.168.1.1' } });
    expect(input).toHaveValue('192.168.1.1');
  });

  test('shows an alert if input is empty when clicking search', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Header />);
    const button = screen.getByRole('button', {
      name: 'Search for IP Address',
    });
    fireEvent.click(button);
    expect(alertMock).toHaveBeenCalledWith(
      'Please enter an IP address or domain.'
    );
    alertMock.mockRestore();
  });

  test('calls APIs and updates the state when input is valid', () => {
    render(<Header />);
    const input = screen.getByPlaceholderText(
      'Search for any IP address or domain'
    );
    const button = screen.getByRole('button', {
      name: 'Search for IP Address',
    });

    fireEvent.change(input, { target: { value: '192.168.1.1' } });
    fireEvent.click(button);

    // Mock API call assertions or state updates would go here
  });

  test('handles API errors gracefully', () => {
    render(<Header />);
    const input = screen.getByPlaceholderText(
      'Search for any IP address or domain'
    );
    const button = screen.getByRole('button', {
      name: 'Search for IP Address',
    });

    fireEvent.change(input, { target: { value: 'invalid-ip' } });
    fireEvent.click(button);

    // Assertions for error handling would go here
  });
});
