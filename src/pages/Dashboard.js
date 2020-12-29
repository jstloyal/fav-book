import AddBookForm from '../features/catalog/AddBookForm';
import UserBooks from '../features/catalog/UserBooks';
import UserFavorites from '../features/catalog/UserFavorites';
import UserDetails from '../features/user/UserDetails';
import Layout from './Layout';

const Dashboard = () => {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <UserDetails />
      <AddBookForm />
      <UserFavorites />
      <UserBooks />
    </Layout>
  );
};

export default Dashboard;
