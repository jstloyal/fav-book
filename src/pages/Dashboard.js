import AddBookForm from '../features/catalog/AddBookForm';
import UserBooks from '../features/catalog/UserBooks';
import UserFavorites from '../features/catalog/UserFavorites';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <AddBookForm />
    <UserFavorites />
    <UserBooks />
  </div>
);

export default Dashboard;
