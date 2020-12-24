import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { addBook, getBooks } from './catalogSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const user = useSelector(state => state.user.user);
  const headers = useSelector(state => state.user.headers);
  // const loading = useSelector(state => state.catalog.loaders.addBook);
  const error = useSelector(state => state.catalog.errors.addBook);

  const onSubmit = data => {
    dispatch(addBook({ data, headers }));
    dispatch(getBooks());
  };

  return (
    <div>
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            name="title"
            placeholder="Title"
            ref={register({
              // required: {
              //   value: true,
              //   message: 'This field is mandatory',
              // },
              minLength: {
                value: 3,
                message: 'Minimum of 3 characters',
              },
              maxLength: {
                value: 40,
                message: 'Maximum 40 characters',
              },
            })}
          />
          <p>{errors.title && errors.title.message}</p>
        </div>
        <div>
          <textarea
            name="decription"
            placeholder="Description"
            rows="10"
            cols="20"
            ref={register({
              required: {
                value: true,
                message: 'This field is mandatory',
              },
              minLength: {
                value: 6,
                message: 'Minimum 6 characters',
              },
              maxLength: {
                value: 50000,
                message: 'Maximum 50.000 characters',
              },
            })}
          />
          <p>{errors.description && errors.description.message}</p>
        </div>
        <div>
          <input
            name="author"
            placeholder="Author"
            ref={register({
              required: {
                value: true,
                message: 'This field is mandatory',
              },
              minLength: {
                value: 6,
                message: 'Minimum of 6 characters',
              },
              maxLength: {
                value: 30,
                message: 'Maximum 30 characters',
              },
            })}
          />
          <p>{errors.author && errors.author.message}</p>
        </div>
        <div>
          <input
            name="genre"
            placeholder="Genre"
            ref={register({
              required: {
                value: true,
                message: 'This field is mandatory',
              },
              minLength: {
                value: 3,
                message: 'Minimum of 3 characters required',
              },
              maxLength: {
                value: 15,
                message: 'Maximum of 15 characters',
              },
            })}
          />
          <p>{errors.genre && errors.genre.message}</p>
        </div>
        <div>
          <input
            type="hidden"
            name="user_id"
            defaultValue={user.id}
            ref={register}
          />
        </div>
        {Loading ? (
          <button type="submit" disabled aria-disabled>
            Adding book...
          </button>
        ) : (
          <button type="submit">Add book</button>
        )}
        {(error && <Error errors={error} />) || null}
      </form>
    </div>
  );
};

export default AddBookForm;
