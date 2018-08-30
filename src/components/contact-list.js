import React from 'react';

export default function ContactList(props) {
  // const dummyContacts = props.contacts;

  // if (props.editMode) {
  //   dummyContacts.map
  // }
  const dummyContacts = props.contacts.map((contact, index) => 
    <li className="contact" aria-label="contact" key={index}>
      <span>Name: {contact.name}</span>
      <br />
      <span>Phone-number: {contact.number}</span>
      <br />
      <span>Email: {contact.email}</span>
      <br />
      <button type="button" className="EditButton" value="edit" name="edit" data-owner={contact.name} onClick={props.onClick}>Edit</button>
      <button type="button" className="DeleteButton" value="delete" name="delete" data-owner={contact.name} onClick={props.onClick}>Delete</button>
    </li>
    );

  return(
    <ul className="ContactList" aria-label="contact-list">
      {dummyContacts}
    </ul>
  )
}