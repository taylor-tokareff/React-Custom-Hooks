import React from 'react';
import { render, screen } from '@testing-library/react';
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
      <MemoryRouter initialEntries={['/3']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    await screen.findByText('Bender');
    await screen.findByText('I\'m a fraud.A poor, lazy, sexy, fraud.');
    await screen.findByAltText('Bender');
  });
});
