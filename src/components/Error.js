import PropTypes from 'prop-types';

const Error = ({ errors }) => {
  return (
    <div>
      {errors.map((error, i) => (
        <p key={`${error}${i}`}>{error}</p>
      ))}
    </div>
  );
};

Error.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Error;
