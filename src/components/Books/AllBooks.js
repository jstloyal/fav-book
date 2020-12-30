import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Loading from '../Loading';
import Error from '../Error';
// import SliderPagination from './SliderPagination';
import { getBooks } from '../../features/catalog/catalogSlice';
import { BooksContainer, SliderPaginationContainer } from './Styles.styled.js';

const AllBooks = () => {
  const loading = useSelector(state => state.catalog.loaders.loadingBooks);
  const error = useSelector(state => state.catalog.errors.loadingBooks);
  const books = useSelector(state => state.catalog.books);

  const dispatch = useDispatch();
  useEffect(() => {
    if (books.length === 0) dispatch(getBooks());
  }, [dispatch, books]);

  const myBooks = [...books].map(book => (
    <Book key={book.id} book={book} />
  ));

  return (
    <BooksContainer>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error errors={error} />
      ) : (
        <div className="slider">
          {myBooks.length === 0
            ? 'No book in the database.'
            : myBooks}
        </div>
      )}

      <SliderPaginationContainer>
        Total: {myBooks.length}
      </SliderPaginationContainer>
    </BooksContainer>
  );
};

export default AllBooks;
