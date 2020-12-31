import { useSelector } from 'react-redux';
import Book from './Book';

const FavoritedBooks = () => {
  const books = useSelector(state => state.catalog.books);
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
