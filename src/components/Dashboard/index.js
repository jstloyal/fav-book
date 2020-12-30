import AddBookForm from '../Books/AddBookForm';
import UserBooks from '../Books/UserBooks';
import UserFavorites from '../Books/UserFavorites';
import Layout from '../Layout';

const Dashboard = () => {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <AddBookForm />
      <UserFavorites />
      <UserBooks />
    </Layout>
  );
};

export default Dashboard;
