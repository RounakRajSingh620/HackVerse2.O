import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

import './Details.css';

export default function MyForm() {
  const navigate = useNavigate()
  const [tenantenub, setTnenateNumber] = useState();
  const [date, setDate] = useState();
  const [deposit , setDrposit] = useState();
  const [monthly , setMonthly] = useState();
  const [ten1 , setTen1] = useState("0x...");
  const [ten2 , setTen2] = useState("0x...");
  const [ten3 , setTen3] = useState("0x...");
  // const [message, setMessage] = useState('');

  const handleNumberChange = (event) => {
    setTnenateNumber(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleDepositChange = (event) => {
    setDrposit(event.target.value);
  };
  const handleMonthlyChange = (event) => {
    setMonthly(event.target.value);
  };
  const handleTen1Change = (event) => {
    setTen1(event.target.value);
  };
  const handleTen2Change = (event) => {
    setTen2(event.target.value);
  };
  const handleTen3Change = (event) => {
    setTen3(event.target.value);
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
              <input onChange={handleDepositChange} type="number" value={deposit} />
            </label> <br />
            <label className='lab'>
              Monthly Amount <br />
              <input type="number" onChange={handleMonthlyChange} value={monthly} />
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
            Tenent 1 <br/>
            <span >Public address</span>
            <label className='tenent'>
            <input type="text" onChange={handleTen1Change} required pattern='[a-zA-Z0-9]+'  value={ten1} />
            </label>
            <br />
            Tenent 2
            <br/>
            <span >Public address</span>
            <label className='tenent'>
            <input type="text" onChange={handleTen2Change} value={ten2} />
            </label> <br />
            
            Tenent 3
            <br/>
            <span >Public address</span>
            <label className='tenent'>
              <input type="text" value={ten3} onChange={handleTen3Change} />
               </label> <br />
            <div></div>
            <button className='addmore' type="submit">add more</button>
          </form>
        </div>
        <button onClick = {()=> navigate("/Payment")} className='submit' type="submit">Pay wallet</button>
      </div>
    </>
  );
}

