import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const {
    title, description, author, genre, ratings, user,
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
      </ul>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Book;
