import PropTypes from 'prop-types';
import style from './ContactUser.module.css';

const ContactUser = ({ contact: { name, number, id }, deleteUser }) => {
  return (
    <li className={style.itemUser}>
      <p className={style.itemText}>{name}:</p>
      <p className={style.itemText}>{number}</p>
      <button className={style.buttonDelete} onClick={() => deleteUser(id)}>Delete</button>
    </li>
  );
};

ContactUser.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
};


export default ContactUser;