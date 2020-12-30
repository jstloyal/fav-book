import { useSelector } from 'react-redux';
import Book from './Book';

const NewBooks = () => {
  const books = useSelector(state => state.catalog.books);
  const myBooks = books
    .slice(0, 4)
    .map(book => <Book key={book.id} book={book} />);

  return (
    <div>
      <h1>Newest Books</h1>
      {myBooks}
    </div>
  );
};

export default NewBooks;
