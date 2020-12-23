import { useSelector } from 'react-redux';
import Book from './Book';

const AllBooks = () => {
  const books = useSelector(state => state.catalog.books);
  const myBooks = [...books].map(book => (
    <Book key={book.id} book={book} />
  ));

  return (
    <div>
      <h1>All Books</h1>
      {myBooks}
    </div>
  );
};

export default AllBooks;
