import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './catalogSlice';
import PropTypes from 'prop-types';


const Book = ({ book }) => {
  const currentUser = useSelector(state => state.user.user);
  const headers = useSelector(state => state.user.headers);
  const loading = useSelector(state => state.catalog.loaders.deleteBook);
  const error = useSelector(state => state.catalog.errors.deleteBook);

  const {
    id, title, description, author, genre, ratings, user,
  } = book;

  const dispatch = useDispatch();
  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteBook({ id, headers }));
  };

  return (
    <div>
      {error ? <p>{error}</p> : null}
      {currentUser.id === user.id ? (
        <div>
          <button
            type="button"
            onClick={handleDelete}
            disabled={loading && loading === id}
          >
            X
          </button>
          <button type="button">Edit</button>
        </div>
      ) : null}
      <ul>
        <li>{title}</li>
        <li>{description}</li>
        <li>{author}</li>
        <li>{genre}</li>
        {ratings ? <li>{ratings.join('-')}</li> : null}
        <li>
          By:
          {user.name}
        </li>
        <li>
          <Link to={`/books/${id}`}>More details</Link>
        </li>
      </ul>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Book;
