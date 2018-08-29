import React from 'react';

export default function ContactList(props) {
  const dummyContacts = props.contacts.map((contact, index) => 
    <li className="contact" aria-label="contact" key={index}>
      <span>Name: {contact.name}</span>
      <br />
      <span>Phone-number: {contact.number}</span>
      <br />
      <span>Email: {contact.email}</span>
    </li>
    );

  return(
    <ul className="ContactList" aria-label="contact-list">
      {dummyContacts}
    </ul>
  )
}