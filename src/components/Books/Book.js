import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { BookContainer } from './Styles.styled.js';
import DeleteButton from './DeleteButton';

const Book = ({ book }) => {
  const {
    id,
    title,
    author,
    genre,
    user_id: userId,
    image_url: imageUrl,
    ratings,
  } = book;
  const rating = ratings ? ratings : Math.floor(Math.random() * Math.floor(6));

  return (
    <BookContainer>
      <Link to={`/books/${id}`}>
        <div className="image">
          <img src={imageUrl} alt="Book" />
          <DeleteButton userId={userId} id={id} />
        </div>

        <div className="flex">
          <div className="details">
            <h3>{title}</h3>
            <ReactStars
              count={5}
              value={rating}
              isHalf={true}
              edit={false}
              size={20}
              activeColor="#ffd700"
            />
          </div>

          <div>
            <p>Genre: {genre}</p>
            <p>Author: {author}</p>
          </div>
        </div>
      </Link>
    </BookContainer>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Book;