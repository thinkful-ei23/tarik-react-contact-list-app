import React from 'react';

export default function CreateContact() {
  return (
    <form className="CreateContact" id="CreateContact">
      <label for="name-entry" aria-label="name-entry">Name: </label>
      <input type="text" id="name-entry" name="name-entry" placeholder="Jane Doe" required />
      <br />
      <label for="phone-entry" aria-label="phone-entry">Phone Number: </label>
      <input type="tel" id="phone-entry" name="name-entry" placeholder="777-777-7777" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
      <br />
      <label for="email" aria-label="email">Email: </label>
      <input type="email" id="email" name="email" placeholder="jane.doe@thinkful.com" />
      <br />
      <button type="submit" form="CreateContact" value="Submit">Submit</button>
    </form>
  )
}