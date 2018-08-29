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
      ]
    }
  }
  
  render() {
    return (
      <div className="UserInterface">
        <CreateContact />
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
}