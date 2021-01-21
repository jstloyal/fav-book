import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../../app/store';
import App from '../../App';
import { getBooks, getBook } from '../../features/catalog/catalogSlice';

jest.setTimeout(20000);
afterEach(() => {
  cleanup();
});

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);

describe('catalogSlice async actions and initial state', () => {
  test('has no books in the array in the initial false', () => {
    const { books } = store.getState().catalog;
    expect(books.length).toStrictEqual(0);
  });

  test('getBooks fetches the Books from the API and populates the state array', async () => {
    await store.dispatch(getBooks());
    const { books } = store.getState().catalog;
    expect(books.length).not.toStrictEqual(0);
  });

  test('has a default empty book object in the initial false', () => {
    const defaultEmptyBook = { user: {}, favorited_by: [] };
    const { book } = store.getState().catalog;
    expect(book).toStrictEqual(defaultEmptyBook);
  });

  test('getBook fetches a Product from the API by the ID received as a parameter and populates the state product object', async () => {
    const id = 54;
    await store.dispatch(getBook(id));
    const { book } = store.getState().catalog;
    expect(book.id).toStrictEqual(id);
  });
});
