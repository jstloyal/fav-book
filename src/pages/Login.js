import { Container, Button } from './Components.styled.js';
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
          <Button to="/sign_up">Create account</Button>
        </footer>
      </div>  
    </Container>
  );
};

export default Login;
