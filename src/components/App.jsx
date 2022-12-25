import React from 'react';
import ContactForm from './AddForm/AddForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      isAddFormShow: false,
    }));
  };


  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={this.contacts} />
      </div>
    );
  }
}

export default App;
