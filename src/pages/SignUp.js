import SignUpForm from '../features/user/SignUpForm';
import { Container, Button } from './Components.styled.js';

const SignUp = () => (
  <Container>
    <div className="wrapper">
      <header>
        <h1>Sign Up</h1>
        <p>Hey! Sign up and start managing your favorite books</p>
      </header>
      <SignUpForm />

      <footer>
        <Button to="/login">Already registered?</Button>
      </footer>
    </div>
  </Container>
);

export default SignUp;
