import PropTypes from 'prop-types';

const Error = ({ errors }) => (
  <div>
    {errors.map(error => (
      <p key={`${error}`}>{error}</p>
    ))}
  </div>
);

Error.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Error;
