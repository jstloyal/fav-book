import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../app/store';
import App from '../../App';

describe('Book page', () => {
  afterEach(() => {
    cleanup();
  });

  test('has a loading text on initial render', async () => {
    const history = createMemoryHistory();
    history.push('/books/50');

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(getByText(/loading/i)).toBeTruthy();
  });

  test('display a book image, usage and contact button', async () => {
    const history = createMemoryHistory();
    history.push('/books/50');

    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    const result = await screen.findByText(/usage/i);
    const button = await screen.findByText(/contact books/i);
    expect(result).toBeTruthy();
    expect(button).toBeTruthy();
  });
});
