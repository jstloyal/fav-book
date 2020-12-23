import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const {
    id, title, description, author, genre, ratings, user,
  } = book;

  return (
    <div>
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
