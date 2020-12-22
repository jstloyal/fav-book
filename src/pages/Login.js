import LoginForm from '../features/user/LoginForm';

const Login = () => (
  <main>
    <header>
      <h1>Sign In</h1>
      <p>Hey! sign in and start adding your favorite books</p>
    </header>
    <LoginForm />
    <footer>
      <a href="/" onClick={e => e.preventDefault()}>
        Forgot Password?
      </a>
    </footer>
  </main>
);

export default Login;
