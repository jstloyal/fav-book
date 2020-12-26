import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import NewBooks from '../features/catalog/NewBooks';
import FavoritedBooks from '../features/catalog/FavoritedBooks';

const Home = () => {
  const loading = useSelector(state => state.catalog.loaders.loadingBooks);
  const error = useSelector(state => state.catalog.errors.loadingBooks);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error errors={[error]} />
  ) : (
    <div>
      <h1>Home</h1>
      <FavoritedBooks />
      <NewBooks />
    </div>
  );
};

export default Home;
