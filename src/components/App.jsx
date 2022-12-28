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
      contacts: [...prevState.contacts, newUser],
      isAddFormShow: false,
    }));
  };

  deleteUser = userId => {
    this.setState(prevSate => ({
      contacts: prevSate.contacts.filter(({ id }) => id !== userId),
    }));
  };

  showForm = () => {
    this.setState({
      isAddFormShow: true,
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    const visibleFilter = this.state.contacts.filter(contact => {return(
       contact.text.toLowerCase().includes(this.state.filter.toLowerCase())
    )
    });
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleFilter} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

export default App;
