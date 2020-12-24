import { Link } from 'react-router-dom';
import SignUpForm from '../features/user/SignUpForm';

const SignUp = () => (
  <main>
    <header>
      <h1>Sign Up</h1>
      <p>Hey! Sign up and start managing your favorite books</p>
    </header>
    <SignUpForm />
    <footer>
      <Link to="/logon">Already registered?</Link>
    </footer>
  </main>
);

export default SignUp;
