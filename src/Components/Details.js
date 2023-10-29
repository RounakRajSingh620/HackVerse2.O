import React, { useState } from 'react';
import './Details.css';

export default function MyForm() {
  const [tenantenub, setTnenateNumber] = useState();
  const [date, setDate] = useState();
  const [message, setMessage] = useState('');

  const handleNumberChange = (event) => {
    setTnenateNumber(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <>
      <div className='mainn'>
        <div className="page-2main">
          <form className="leftForm" onSubmit={handleSubmit}>
            <label className='lab'>
              No. of Tenent <br />
              <input type="number" onChange={handleNumberChange} value={tenantenub} />
            </label>
            <br />
            <label className='lab'>
              Date <br />
              <input type="date" onChange={handleDateChange} value={date} />
            </label> <br />

            <label className='lab'>
              Security Deposit <br />
              <input type="number" value={tenantenub} />
            </label> <br />
            <label className='lab'>
              Monthly Amount <br />
              <input type="number" value={tenantenub} />
            </label><br />
            <label className='lab' >
              Owner <br />
              <div className='upSign'>
                 <input className='inpSign' type="file" name="sign" id="" />
                 <button className='upload1' type="submit">upload signature</button>
              </div>
              <div className='upAgr'>
              <input className='inpAgr' type="file" name="agreement" id="" />
               <button className='upload1' type="submit">upload Agreement</button>
              </div>
             
            </label>
          </form>
          <form className="rightForm" onSubmit={handleSubmit}>
            Tenent 1
            <label className='tenent'>
              <input type="text" value={Text} />
              <button className='upload' type="submit">upload signature</button>
            </label>
            <br />
            Tenent 2
            <label className='tenent'>
              <input type="text" value={tenantenub} />
              <button className='upload' type="submit">upload signature</button>
            </label> <br />

            Tenent 3
            <label className='tenent'>
              <input type="text" value={tenantenub} />
              <button className='upload' type="submit">upload signature</button>
            </label> <br />
            <div></div>
            <button className='addmore' type="submit">add more</button>
          </form>
        </div>
        <button className='submit' type="submit">Create wallet</button>
      </div>
    </>
  );
}

