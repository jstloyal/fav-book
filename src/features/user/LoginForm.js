import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './userSlice';
import Error from '../../components/Error';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    dispatch(login(data));
  };

  const loginLoader = useSelector(state => state.user.loader.login);
  const loginError = useSelector(state => state.user.errors.login);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input 
          name="email"
          placeholder="Email"
          ref={register({
            required: {
              value: true,
              message: 'This field is mandatory!',
            },
            minLength: {
              value: 3,
              message: 'Minimum 3 characters',
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
          ref={register({
            required: {
              value: true,
              message: 'This field is mandatory',
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
    </form>
  );
};
