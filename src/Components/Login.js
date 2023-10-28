import React from 'react';
import './Login.css';
import owner from "../assets/owner.jpg"
import { useNavigate } from "react-router-dom"

const Page3 = () => {
         const navigate = useNavigate()
  return (
    <div className='pagee3'>
     <div className="how">How do you want to use </div> 
      <div className='page3main'>
      <div onClick = {()=> navigate("/owner")} className='left1'>
        <img className="owner" src={owner} alt="owner" />
      Owner
      </div>
      <div className='right1'>
        <img className="owner" src={owner} alt="owner" />
      Tenent
      </div>
    </div>
    </div>
  );
};

export default Page3;