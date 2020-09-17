import React from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

class ContactBook extends React.Component {
  state= {
    contacts:[
      {
        id: 1,
        name: "Jack",
        lastName: "Smith",
        number: 777987
      }, {
        id: 2,
        name: "John",
        lastName: "Peters",
        number: 7723475
      }, {
        id: 3,
        name: "Joana",
        lastName: "Roberts",
        number: 7773682
      }
    ]}
  
  addContact=(contact)=>{
    const contacts= [...this.state.contacts];
    contacts.push(contact);
    this.setState({contacts});
  }

  editContact=({id, name, lastName, number})=> {
    const index = this.state.contacts.findIndex((item)=>{
      return item.id === id;
    });
    const contacts= [...this.state.contacts];
    const item = {...contacts[index]};
    item.name = name;
    item.lastName = lastName;
    item.number=number;
    contacts[index]=item;
    this.setState({contacts})
  }

  removeContact=(id)=> {
    const contacts = this.state.contacts.filter(contact => contact.id !== id)
    this.setState({contacts});
  }
  render(){
    return (
      <div className = "wrapper">
      <h1>Contact App</h1> 
      <ContactForm onSubmit={this.addContact}/>
      <ContactList 
        contacts={this.state.contacts}
        editContact={this.editContact}
        removeContact={this.removeContact}
      />
      </div> 
    );
  }
}

export default ContactBook;
