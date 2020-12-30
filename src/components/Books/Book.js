import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { BookContainer } from './Styles.styled.js';

const Book = ({ book }) => {
  const { id, title, author, genre, image_url: imageUrl, ratings } = book;
  const rating = ratings ? Math.floor(Math.random() * Math.floor(6));

  return (
    <BookContainer>
      <Link to={`/books/${id}`}>
        <div className="image">
          <img src={imageUrl} alt="Book" />
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