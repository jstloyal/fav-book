import SignUpForm from '../features/user/SignUpForm';

const SignUp = () => (
  <main>
    <header>
      <h1>Sign Up</h1>
      <p>Hey! Sign up and start managing your favorite books</p>
    </header>
    <SignUpForm />
    <footer>
      <a href="/" onClick={e => e.preventDefault()}>
        Already Registered?
      </a>
    </footer>
  </main>
);

export default SignUp;
