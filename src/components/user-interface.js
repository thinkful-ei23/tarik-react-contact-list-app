import React from 'react';
import CreateContact from './create-contact';
import ContactList from './contact-list';

export default class UserInterface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
            "name": "John Doe",
            "number": "555-555-5555",
            "email": "jdoe@thinkful.com",
            "editMode": false
        },
        {
            "name": "Jane Doe",
            "number": "777-777-7777",
            "email": "jane.doe@thinkful.com",
            "editMode": false
        },
        {
            "name": "Joe Shmoe",
            "number": "999-999-9999",
            "email": "jshmoe@thinkful.com",
            "editMode": false
        }
      ],
      name: '',
      number: '',
      password: ''
    }
  }
  
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('onSubmit ran');
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      email: this.state.email,
      editMode: false
    }

    this.setState({
      contacts: [...this.state.contacts, newContact]
    });
  }

  handleButtonClick(event) {
    if(event.target.name === "delete") {
      console.log('handeButtonClick ran for a deletion!');
      console.log(event.target.dataset.owner);
      const contacts = this.state.contacts.filter(contact => contact.name!== event.target.dataset.owner);
      this.setState({
        contacts
      });
    } else {
      console.log('handleButtonClick ran for an edit');
      const contacts = this.state.contacts.map(contact => contact.name=== event.target.dataset.owner ? {...contact, editMode:!contact.editMode} : contact);
      console.log(contacts);
      this.setState({
        contacts
      })
    }
  }
  
  render() {
    return (
      <div className="UserInterface">
        <CreateContact onChange={(e) => {this.onChange(e)}} onSubmit={(e) => {this.onSubmit(e)}} />
        <ContactList contacts={this.state.contacts} onClick={(e) => this.handleButtonClick(e)} />
      </div>
    )
  }
}