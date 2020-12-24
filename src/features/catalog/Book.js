import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/date';
import PropTypes from 'prop-types';
import FavoriteButton from './FavoriteButton';
import DeleteButton from './DeleteButton';


const Book = ({ book }) => {
  const {
    id,
    title,
    description,
    author,
    genre,
    favorite_by: favoritedBy,
    created_at: createdAt,
    updated_at: updatedAt,
    user: creator,
    ratings,
    user,
  } = book;

  const createdDate = formatDate(createdAt);
  const updatedDate  = formatDate(updatedAt);
  
  return (
    <div>
      <DeleteButton id={id} creator={creator} />
      <FavoriteButton id={id} favoritedBy={favoritedBy} />
      <ul>
        <li>{title}</li>
        <li>{description}</li>
        <li>{author}</li>
        <li>{genre}</li>
        {ratings ? <li>{ratings.join('-')}</li> : null}
        <li>
          By:
          {creator.name}
        </li>
        <li>Likes ({favoritedBy.length})</li>
        {updatedDate !== createdDate ? <li>Updated {updatedDate}</li> : null}
        <li>Added {createdDate}</li>
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
