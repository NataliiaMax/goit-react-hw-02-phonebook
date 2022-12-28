import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import ContactUser from 'components/ContactUser/ContactUser';

const ContactList = ({ contacts, deleteUser }) => {
  return (
    <ul className={style.listUsers}>
      {contacts.map(contact => (
        <ContactUser deleteUser={deleteUser} key={contact.id} user={contact} />
      ))}
      ;
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
