import PropTypes from 'prop-types';
import ShowBook from '../features/catalog/ShowBook';

const BookDetails = ({ match }) => {
  const { id } = match.params;

  return (
    <div>
      <h1>Book Details</h1>
      <ShowBook id={id} />
    </div>
  );
};

BookDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BookDetails;
