import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
// import NewBooks from '../features/catalog/NewBooks';
// import FavoritedBooks from '../features/catalog/FavoritedBooks';
import HeroSection from '../components/HeroSection';
import DashboardSection from '../components/DashboardSection';
import DesignerSection from '../components/DesignerSection';
import PeopleSection from '../components/PeopleSection';
import StartFreeSection from '../components/StartFreeSection';
import Footer from '../components/Footer';

const Home = () => {
  const loading = useSelector(state => state.catalog.loaders.loadingBooks);
  const error = useSelector(state => state.catalog.errors.loadingBooks);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error errors={[error]} />
  ) : (
    <div>
      <HeroSection />
      <DashboardSection />
      <DesignerSection />
      <PeopleSection />
      <StartFreeSection />
      <Footer />
    </div>
  );
};

export default Home;
