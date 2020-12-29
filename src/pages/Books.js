import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import AllBooks from '../features/catalog/AllBooks';
import MobileLayout from './MobileLayout';
import { MobileContainer } from './Components.styled';

const Books = () => {
  const loading = useSelector(state => state.catalog.loaders.loadingBooks);
  const error = useSelector(state => state.catalog.errors.loadingBooks);

  return (
    <MobileLayout>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error errors={error} />
      ) : (
        <MobileContainer>
          <AllBooks />
        </MobileContainer>
      )}
    </MobileLayout>
  );
};

export default Books;
