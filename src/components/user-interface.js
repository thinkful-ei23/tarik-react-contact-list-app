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
            "email": "jdoe@thinkful.com"
        },
        {
            "name": "Jane Doe",
            "number": "777-777-7777",
            "email": "jane.doe@thinkful.com"
        },
        {
            "name": "Joe Shmoe",
            "number": "999-999-9999",
            "email": "jshmoe@thinkful.com"
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
      email: this.state.email
    };

    this.setState({
      contacts: [...this.state.contacts, newContact]
    });
  }
  
  render() {
    return (
      <div className="UserInterface">
        <CreateContact onChange={(e) => {this.onChange(e)}} onSubmit={(e) => {this.onSubmit(e)}} />
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
}