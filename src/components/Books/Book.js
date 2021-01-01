import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { BookContainer } from './Styles.styled';
import DeleteButton from './DeleteButton';
import FavoriteButton from './FavoriteButton';

const Book = ({ book }) => {
  const currentUser = useSelector(state => state.user.user);
  const {
    id,
    title,
    author,
    genre,
    user_id: userId,
    image_url: imageUrl,
    ratings,
    favorited_by: favoritedBy,
  } = book;
  const rating = ratings || Math.floor(Math.random() * Math.floor(6));

  return (
    <BookContainer>
      <Link to={`/books/${id}`}>
        <div className="image">
          <img src={imageUrl} alt="Book" />
          <DeleteButton userId={userId} id={id} />
          {currentUser.id ? (
            <>
              <DeleteButton userId={userId} id={+id} />
              <div className="likes">
                <p>
                  Likes &nbsp;
                  {favoritedBy.length}
                </p>
                <FavoriteButton className="favorite" id={+id} favoritedBy={favoritedBy} />
              </div>
            </>
          ) : null}
        </div>

        <div className="flex">
          <div className="details">
            <h3>{`${title.slice(0, 25)}`}</h3>
            <ReactStars
              count={5}
              value={rating}
              isHalf
              edit={false}
              size={20}
              activeColor="#ffd700"
            />
          </div>

          <div className="flex-right">
            <p>
              Genre:
              {`${genre}`}
            </p>
            <p>
              Author:
              {`${author}`}
            </p>
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
