import PropTypes from 'prop-types';
import ShowBook from '../features/catalog/ShowBook';
import Layout from './Layout';

const BookDetails = ({ match }) => {
  const { id } = match.params;

  return (
    <Layout>
      <h1>Book Details</h1>
      <ShowBook id={id} />
    </Layout>
  );
};

BookDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BookDetails;
