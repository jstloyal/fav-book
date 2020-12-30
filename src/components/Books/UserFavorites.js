import { useSelector } from 'react-redux';
import Loading from '../Loading';
import Error from '../Error';
import Book from './Book';
import { BooksContainer, ProductsContainer, SliderPaginationContainer } from './Styles.styled';

const UserFavorites = () => {
  const currentUser = useSelector(state => state.user.user);
  const loading = useSelector(state => state.catalog.loaders.loadingBooks);
  const error = useSelector(state => state.catalog.errors.loadingBooks);
  const books = useSelector(state => state.catalog.books);

  const myBooks = [...books]
    .filter(book =>
      book.favorited_by.some(favorite => favorite.id === currentUser.id)
    )
    .map(book => <Book key={book.id} book={book} />);

  return (
    <BooksContainer>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error errors={error} />
      ) : (
        <div className="slider">
          {myBooks.length === 0
            ? 'No books favorited by you.'
            : myBooks}
        </div>
      )}

      <SliderPaginationContainer>
        Total: {myBooks.length}
      </SliderPaginationContainer>
    </BooksContainer>
  );
};

export default UserFavorites;
