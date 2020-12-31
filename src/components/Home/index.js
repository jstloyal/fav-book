import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeroSection from './HeroSection';
import DashboardSection from './DashboardSection';
import DesignerSection from './DesignerSection';
import PeopleSection from './PeopleSection';
import StartFreeSection from './StartFreeSection';
import Layout from '../Layout';
import { getBooks } from '../../features/catalog/catalogSlice';

const Home = () => {
  const books = useSelector(state => state.catalog.books);
  const dispatch = useDispatch();
  useEffect(() => {
    if (books.length === 0) dispatch(getBooks());
  }, [dispatch, books]);

  return (
    <Layout>
      <HeroSection />
      <DashboardSection />
      <DesignerSection />
      <PeopleSection />
      <StartFreeSection />
    </Layout>
  );
};

export default Home;
