import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../app/store';
import App from '../../App';

describe('Products page', () => {
  afterEach(() => {
    cleanup();
  });

  test('has a Books title and a total section for the slider', async () => {
    const history = createMemoryHistory();
    history.push('/books');

    const { getByText, getAllByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(typeof getAllByText(/Books/i)).toStrictEqual('object');
    expect(getAllByText(/Books/i).length).toBeGreaterThanOrEqual(1);
    expect(getByText(/total/i)).toBeTruthy();
  });

  test('has a list of books after the load', async () => {
    const history = createMemoryHistory();
    history.push('/books');

    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    const result = await screen.findAllByAltText(/book/i);
    expect(typeof result).toStrictEqual('object');
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
});
