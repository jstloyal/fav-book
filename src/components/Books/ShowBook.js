import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import FavoriteButton from './FavoriteButton';
import { getBook } from '../../features/catalog/catalogSlice';
import { ShowBookContainer } from './Styles.styled';
import Loading from '../Loading';
import Error from '../Error';
import { formatDate } from '../../utils/date';

const ShowBook = ({ id }) => {
  const currentUser = useSelector(state => state.user.user);
  const book = useSelector(state => state.catalog.book);
  const loading = useSelector(state => state.catalog.loaders.loadingBook);
  const error = useSelector(state => state.catalog.errors.loadingBook);
  const {
    // title,
    description,
    author,
    genre,
    image_url: imageUrl,
    favorite_by: favoritedBy,
    created_at: createdAt,
    updated_at: updatedAt,
    user_name: userName,
    ratings,
  } = book;
  const rating = ratings ? ratings : Math.floor(Math.random() * Math.floor(6));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook(id));
  }, [dispatch, id]);

  const createdDate = formatDate(createdAt);
  const updatedDate = formatDate(updatedAt);

  return (
    <ShowBookContainer>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error errors={[error]} />
      ) : (
        <>
          <div className="image">
            {currentUser.id ? (
              <div className="likes">
                <p>Likes {favoritedBy.length}</p>
                <FavoriteButton
                  className="favorite"
                  id={+id}
                  favoritedBy={favoritedBy}
                />
              </div>
            ) : null}
            <img src={imageUrl} alt="Book" />

            <div className="flex">
              <div className="details">
                <img
                  src="http://unsplash.it/50/50?gravity=center"
                  alt="random img"
                  width="50"
                  height="50"
                />
                <div className="profile">
                  <h3>{userName}</h3>
                  <ReactStars
                    count={5}
                    value={rating}
                    isHalf={true}
                    edit={false}
                    size={20}
                    activeColor="#ffd700"
                    color="#fff"
                  />
                </div>
              </div>

              <div>
                <p>Author: {author}</p>
                <p>Genre: {genre}</p>
              </div>
            </div>
          </div>
          <div className="description">
            <h3>About this book</h3>
            <p>{description}</p>

            <p className="date">
              {updatedDate !== createdDate
                ? `Updated ${updatedDate}`
                : `Added ${createdDate}`}
            </p>
          </div>
        </>
      )}
    </ShowBookContainer>
  );
};

ShowBook.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ShowBook;
