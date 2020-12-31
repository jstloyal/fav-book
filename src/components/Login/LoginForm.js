import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '../Styles.styled';
import { login } from '../../features/user/userSlice';
import Error from '../Error';

const LoginForm = () => {
  const loginLoader = useSelector(state => state.user.loaders.login);
  const loginError = useSelector(state => state.user.errors.login);

  const dispatch = useDispatch();
  const {
    register, handleSubmit, errors, reset,
  } = useForm();
  const onSubmit = data => {
    dispatch(login(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div>
        <input
          name="email"
          placeholder="Email"
          defaultValue="demoUser@mail.com"
          ref={register({
            required: {
              value: true,
              message: 'This field is mandatory!',
            },
            minLength: {
              value: 6,
              message: 'Minimum 6 characters',
            },
            maxLength: {
              value: 80,
              message: 'Maximum 80 characters',
            },
          })}
        />
        <p>{errors.email && errors.email.message}</p>
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          defaultValue="123456"
          ref={register({
            required: {
              value: true,
              message: 'This field is mandatory',
            },
            minLength: {
              value: 6,
              message: 'Minimum 6 characters',
            },
          })}
        />
        <p>{errors.password && errors.password.message}</p>
      </div>
      {loginLoader ? (
        <button type="submit" disabled aria-disabled>
          Signing in...
        </button>
      ) : (
        <button type="submit">Sign In</button>
      )}

      {(loginError && <Error errors={loginError} />) || null}
    </Form>
  );
};

export default LoginForm;
