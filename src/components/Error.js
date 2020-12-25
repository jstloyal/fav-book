import PropTypes from 'prop-types';

const Error = ({ errors }) => {
  return (
    <div>
      {typeof errors === 'string' ? (
        <p>{errors}</p>
      ) : (
        errors.map((error, i) => <p key={`${error}${i}`}>{error}</p>)
      )}
    </div>
  );
}

Error.propTypes = {
  errors: PropTypes.any.isRequired,
};

export default Error;
