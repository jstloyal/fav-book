import { useSelector } from 'react-redux';
import Book from './Book';

const UserFavorites = () => {
  const books = useSelector(state => state.catalog.books);
  const currentUser = useSelector(state => state.user.user);
  const myBooks = [...books]
    .filter((book) =>
      book.favorited_by.some(favorite => favorite.id === currentUser.id)
    )
    .map((book) => <Book key={book.id} book={book} />);

  return (
    <div>
      <h1>My favorited ({myBooks.length})</h1>
      {myBooks}
    </div>
  );
};

export default UserFavorites;
