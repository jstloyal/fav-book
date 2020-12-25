import { Link } from 'react-router-dom';
import LoginForm from '../features/user/LoginForm';

const Login = () => {
  return (
    <main>
      <header>
        <h1>Sign In</h1>
        <p>Hey! sign in and start adding your favorite books</p>
      </header>
      <LoginForm />
      <footer>
        <Link to="/sign_up">Sign up</Link>
      </footer>
    </main>
  );
};

export default Login;
