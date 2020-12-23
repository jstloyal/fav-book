import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getBook } from './catalogSlice';

const ShowBook = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook(id));
  }, [dispatch, id]);

  const book = useSelector(state => state.catalog.book);

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

ShowBook.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ShowBook;
