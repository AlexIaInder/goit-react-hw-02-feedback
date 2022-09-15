import PropTypes from 'prop-types';
import './Notification.module.css';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
