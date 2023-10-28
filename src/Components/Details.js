import React, { useState } from 'react';
import './Details.css';

export default function MyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
  };

  return (
    <>
      <div className='mainn'>
        <div className="page-2main">
          <form className="form1" onSubmit={handleSubmit}>
            <label>
              No. of Tenent <br />
              <input type="number" value={name} />
            </label>
            <br />
            <label>
              Date <br />
              <input type="date" value={email} />
            </label> <br />

            <label>
              Security Deposit <br />
              <input type="number" value={email} />
            </label> <br />
            <label>
              Monthly Amount <br />
              <input type="number" value={email} />
            </label><br />
            <label>
              Owner <br />
              <button className='upload1' type="submit">upload signature</button>
              <button className='upload1' type="submit">upload Agreement</button>
            </label>
          </form>
          <form className="form2" onSubmit={handleSubmit}>
            Tenent 1
            <label className='tenent'>
              <input type="text" value={name} />
              <button className='upload' type="submit">upload signature</button>
            </label>
            <br />
            Tenent 2
            <label className='tenent'>
              <input type="text" value={email} />
              <button className='upload' type="submit">upload signature</button>
            </label> <br />

            Tenent 3
            <label className='tenent'>
              <input type="text" value={email} />
              <button className='upload' type="submit">upload signature</button>
            </label> <br />

            <button className='addmore' type="submit">add more</button>
          </form>
        </div>
        <button className='submit' type="submit">Create wallet</button>
      </div>
    </>
  );
}