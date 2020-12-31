import SignUpForm from './SignUpForm';
import { Container, StyledLink } from '../Styles.styled';

const SignUp = () => (
  <Container>
    <div className="wrapper">
      <header>
        <h1>Sign Up</h1>
        <p>Hey! Sign up and start managing your favorite books</p>
      </header>
      <SignUpForm />

      <footer>
        <StyledLink to="/login">Already registered?</StyledLink>
      </footer>
    </div>
  </Container>
);

export default SignUp;
