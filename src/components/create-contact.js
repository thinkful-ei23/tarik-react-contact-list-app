import React from 'react';

export default function CreateContact(props) {
  return (
    <form className="CreateContact" id="CreateContact" onSubmit={props.onSubmit}>
      <label htmlFor="name" aria-label="name">Name: </label>
      <input type="text" id="name" name="name" placeholder="Jane Doe" onChange={props.onChange} required />
      <br />
      <label htmlFor="number" aria-label="number">Phone Number: </label>
      <input type="tel" id="number" name="number" placeholder="777-777-7777" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={props.onChange} required />
      <br />
      <label htmlFor="email" aria-label="email">Email: </label>
      <input type="email" id="email" name="email" placeholder="jane.doe@thinkful.com" onChange={props.onChange} />
      <br />
      <button type="submit" form="CreateContact" value="Submit" >Submit</button>
    </form>
  )
}