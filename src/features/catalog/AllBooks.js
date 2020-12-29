import { useState } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import SliderPagination from './SliderPagination';
import { BooksContainer } from './Global.styled';

const AllBooks = () => {
  const [current, setCurrent] = useState(1);
  const books = useSelector(state => state.catalog.books);
  const myBooks = [...books].map(book => (
    <Book key={book.id} book={book} />
  ));

  return (
    <BooksContainer>
      <div className="slider full">{myBooks}</div>

      <SliderPagination total={books.length} current={current} />
    </BooksContainer>
  );
};

export default AllBooks;
