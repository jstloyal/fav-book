import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import AllBooks from '../features/catalog/AllBooks';
import Layout from './Layout';

const Books = () => {
  const loading = useSelector(state => state.catalog.loaders.loadingBooks);
  const error = useSelector(state => state.catalog.errors.loadingBooks);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error errors={error} />
      ) : (
        <div>
          <h1>All Books</h1>
          <AllBooks />
        </div>
      )}
    </Layout>
  );
};

export default Books;
