import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserFavorites from './UserFavorites';
import MobileLayout from '../Layout/MobileLayout';
import { getBooks } from '../../features/catalog/catalogSlice';
import { MobileContainer } from '../Styles.styled';

const Books = () => {
  const books = useSelector(state => state.catalog.books);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (books.length === 0) dispatch(getBooks());
  }, [dispatch, books]);

  return (
    <MobileLayout title={'My favorites'} bookPage={false}>
      <MobileContainer>
        <UserFavorites />
      </MobileContainer>
    </MobileLayout>
  );
};

export default Books;
