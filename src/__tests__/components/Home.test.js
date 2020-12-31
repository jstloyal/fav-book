import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../app/store';
import App from '../../App';

describe('Contact page', () => {
  afterEach(() => {
    cleanup();
  });

  test('has a join us button in the hero section', async () => {
    const history = createMemoryHistory();
    history.push('/');

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(getByText(/join us/i)).toBeTruthy();
  });

  test('has a footer section with the text all right reserved', async () => {
    const history = createMemoryHistory();
    history.push('/');

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(getByText(/All rights reserved/i)).toBeTruthy();
  });
});
