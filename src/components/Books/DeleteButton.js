import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteBook } from '../../features/catalog/catalogSlice';

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
    const response = window.confirm(
      'Are you sure you want to delete the book?'
    );
    if (response) dispatch(deleteBook(id));
  };

  return (
    <>
      {deleteError ? <p>{deleteError}</p> : null}
      {currentUser.id === userId ? (
        <div className="delete-button">
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleteLoading && deleteLoading === id}
          >
            <FaTrashAlt />
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
