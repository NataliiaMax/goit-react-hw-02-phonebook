import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactUser.module.css';

class ContactUser extends React.Component {
state={
  contacts:[]
}
      render (contacts){
return (
 contacts.map(contact => {
    return <li className={style.userItem} key={contact}>{contact} {contact}</li>
  })
)}}

ContactUser.propTypes={
  contacts:PropTypes.arrayOf.isRequired
}

export default ContactUser;