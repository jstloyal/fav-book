import { useEffect } from 'react';
import PropTypes from 'prop-types';
import AddBookForm from '../features/catalog/AddBookForm';
import UserBooks from '../features/catalog/UserBooks';
import UserFavorites from '../features/catalog/UserFavorites';

const Dashboard = (props) => {
  console.log(props);
  useEffect(() => {
    // console.log(object)
  },[]);

  return (
    <div>
      <h1>Dashboard</h1>
      <AddBookForm />
      <UserFavorites />
      <UserBooks />
    </div>
  );
};

export default Dashboard;
