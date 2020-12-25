import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from './catalogSlice';

const DeleteButton = ({ id, userId }) => {
  const currentUser = useSelector(state => state.user.user);
  const deleteLoading = useSelector(
    state => state.catalog.loaders.deleteBook,
  );
  const deleteError = useSelector(
    state => state.catalog.errors.deleteBook,
  );

  const dispatch = useDispatch();
  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteBook(id));
  };

  return (
    <>
      {deleteError ? <p>{deleteError}</p> : null}
      {currentUser.id === userId ? (
        <div>
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleteLoading && deleteLoading === id}
          >
            X
          </button>
        </div>
      ) : null}
    </>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
};

export default DeleteButton;
