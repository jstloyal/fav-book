import { Container, StyledLink } from '../Styles.styled';
import LoginForm from './LoginForm';

const Login = () => (
  <Container>
    <div className="wrapper">
      <header>
        <h1>Sign In</h1>
        <p>Hey! sign in and start adding your favorite books</p>
      </header>

      <LoginForm />

      <footer>
        <StyledLink to="/sign_up">Create account</StyledLink>
      </footer>
    </div>
  </Container>
);

export default Login;
