import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getBook } from './catalogSlice';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const ShowBook = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook(id));
  }, [dispatch, id]);

  const book = useSelector(state => state.catalog.book);
  const loading = useSelector(state => state.catalog.loaders.loadingBook);
  const error = useSelector(state => state.catalog.errors.loadingBook);

  const {
    title, description, author, genre, ratings, user,
  } = book;

  return loading ? (
    <Loading />
  ) : error ? (
    <Error errors={[error]} />
  ) : (
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

ShowBook.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ShowBook;
