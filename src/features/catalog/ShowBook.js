import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import FavoriteButton from './FavoriteButton';
import { getBook } from './catalogSlice';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { formatData } from '../../utils/date';
import { getBook } from './catalogSlice';

const ShowBook = ({ id }) => {
  const product = useSelector((state) => state.catalog.product);
  const loading = useSelector((state) => state.catalog.loaders.loadingProduct);
  const error = useSelector((state) => state.catalog.errors.loadingProduct);
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook(id));
  }, [dispatch, id]);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error errors={[error]} />
  ) : (
    <div>
      <FavoriteButton id={+id} favoritedBy={favoritedBy} />
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
      </ul>
    </div>
  );
};

ShowBook.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ShowBook;
