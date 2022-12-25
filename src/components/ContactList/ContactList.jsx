import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import ContactUser from 'components/ContactUser/ContactUser';

class ContactList extends React.Component {
state ={
        contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
        name: '',
        number: ''
      }

      render (){
return (
    <ul className={style.contactList}>
      <ContactUser contacts ={this.state}></ContactUser>
    </ul>
)
      }
}
 
ContactList.propTypes={
  contacts:PropTypes.arrayOf(PropTypes.shape({
id: PropTypes.number.isRequired,
name: PropTypes.string.isRequired,
number: PropTypes.number.isRequired
  }
  )).isRequired
}

export default ContactList;


