import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  it('displays a list of characters on the home page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });

  it('displays a characters details', async () => {
    render(
      <MemoryRouter initialEntries={['character/Bender']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    return waitFor(() => {
      const Bender = screen.queryAllByText('Bender');
      expect(Bender[0]).not.toBeEmptyDOMElement();
    });


  });
});
