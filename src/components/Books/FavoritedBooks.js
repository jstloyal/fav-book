import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks } from '../../features/catalog/catalogSlice';

const FavoritedBooks = () => {
  const books = useSelector(state => state.catalog.books);

  const dispatch = useDispatch();
  useEffect(() => {
    if (books.length === 0) dispatch(getBooks());
  }, [dispatch, books]);

  const myBooks = [...books]
    .sort((bookA, bookB) => bookB.favorited_by.length - bookA.favorited_by.length)
    .slice(0, 4)
    .map(book => <Book key={book.id} book={book} />);

  return (
    <div>
      <h1>Most Favorited</h1>
      {myBooks}
    </div>
  );
};

export default FavoritedBooks;
