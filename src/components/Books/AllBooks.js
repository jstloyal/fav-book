import { useState } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Loading from '../Loading';
import Error from '../Error';
import SliderPagination from './SliderPagination';
import { BooksContainer } from './Global.styled';

const AllBooks = () => {
  const loading = useSelector(state => state.catalog.loaders.loadingBooks);
  const error = useSelector(state => state.catalog.errors.loadingBooks);
  const books = useSelector(state => state.catalog.books);
  const [current, setCurrent] = useState(1);

  const myBooks = [...books].map(book => (
    <Book key={book.id} book={book} />
  ));

  return (
    <BooksContainer>
      <div className="slider full">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error errors={error} />
        ) : (
          myBooks
        )}
      </div>

      <SliderPagination total={books.length} current={current} />
    </BooksContainer>
  );
};

export default AllBooks;
