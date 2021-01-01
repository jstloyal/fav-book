import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Loading from '../Loading';
import Error from '../Error';
import { getBooks } from '../../features/catalog/catalogSlice';
import { BooksContainer, SliderPaginationContainer } from './Styles.styled';

const AllBooks = () => {
  const loading = useSelector(state => state.catalog.loaders.loadingBooks);
  const error = useSelector(state => state.catalog.errors.loadingBooks);
  const books = useSelector(state => state.catalog.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, books]);

  const myBooks = [...books].map(book => (
    <Book key={book.id} book={book} />
  ));

  return (
    <BooksContainer>
      {loading ? <Loading /> : null}
      {error ? <Error errors={error} /> : null}
      <div className="slider">
        {myBooks.length === 0 && !loading && !error ? (
          <p className="text-center">No books in the database</p>
        ) : (
          myBooks
        )}
      </div>
      <SliderPaginationContainer>
        Total:
        {' '}
        {myBooks.length}
      </SliderPaginationContainer>
    </BooksContainer>
  );
};

export default AllBooks;
