import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { favorite } from '../../features/catalog/catalogSlice';
import { FavoriteIcon, UnfavoriteIcon } from './Styles.styled';

const FavoriteButton = ({ id, favoritedBy }) => {
  const currentUser = useSelector(state => state.user.user);
  const favoriteLoading = useSelector(
    state => state.catalog.loaders.favorite,
  );
  const favoriteError = useSelector(state => state.catalog.errors.favorite);

  const isFavorited = favoritedBy.some(user => user.id === currentUser.id);
  const type = isFavorited ? 'unfavorite' : 'favorite';

  const dispatch = useDispatch();
  const handleFavorite = e => {
    e.preventDefault();
    dispatch(favorite({
      id, type, currentUser,
    }));
  };

  return (
    <>
      <button
        type="button"
        onClick={handleFavorite}
        disabled={favoriteLoading && favoriteLoading === id}
      >
        {isFavorited ? <UnfavoriteIcon /> : <FavoriteIcon />}
      </button>

      {favoriteError ? <p>{favoriteError}</p> : null}
    </>
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  favoritedBy: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FavoriteButton;
