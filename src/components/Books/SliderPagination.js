import PropTypes from 'prop-types';
import { SliderPaginationContainer } from './Global.styled';

const SliderPagination = ({ current, total }) => {
  return (
    <SliderPaginationContainer>{`${current} / ${total}`}</SliderPaginationContainer>
  );
};

SliderPagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
export default SliderPagination;
