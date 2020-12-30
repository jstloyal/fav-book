import PropTypes from 'prop-types';
import ShowBook from './ShowBook';
import MobileLayout from '../Layout/MobileLayout';

const BookDetails = ({ match }) => {
  const { id } = match.params;

  return (
    <MobileLayout bookPage={true}>
      <h1>Book Details</h1>
      <ShowBook id={id} />
    </MobileLayout>
  );
};

BookDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BookDetails;
