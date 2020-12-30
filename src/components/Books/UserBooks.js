import { useSelector } from 'react-redux';
import Book from './Book';

const UserBooks = () => {
  const books = useSelector(state =>  state.catalog.books);
  const currentUser = useSelector(state => state.user.user);
  const myBooks = [...books]
    .filter(book => book.user_id === currentUser.id)
    .map(book => <Book key={book.id} book={book} />);
  
  return (
    <div>
      <h1>My books ({myBooks.length})</h1>
      {myBooks}
    </div>
  );
};

export default UserBooks;
