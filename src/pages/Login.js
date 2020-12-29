import { Container, StyledLink } from './Components.styled.js';
import LoginForm from '../features/user/LoginForm';

const Login = () => {
  return (
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
};

export default Login;
