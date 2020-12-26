import AddBookForm from '../features/catalog/AddBookForm';
import UserBooks from '../features/catalog/UserBooks';
import UserFavorites from '../features/catalog/UserFavorites';
import UserDetails from '../features/user/UserDetails';

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserDetails />
      <AddBookForm />
      <UserFavorites />
      <UserBooks />
    </div>
  );
};

export default Dashboard;
