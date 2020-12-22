import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('data: >> ', data);
    dispatch(login(data));
  };

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
      <button type="submit">Sign In</button>
    </form>
  )
}