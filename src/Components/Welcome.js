import React from "react";
import "./Welcome.css";

import { useNavigate } from "react-router-dom"
import image2 from "../assets/image2.png"

export default function Welcome() {

        const navigate = useNavigate()
       

        return (
                <div className="whole">
                        <div className="main1">
                                <span>
                                        Create your rent <br /> wallet
                                </span>

                                <button onClick={() => navigate("/dashboard")} type="button" className="joinBtn">Join now ➜ </button>
                        </div>

                        <div className="main2">
                                <img className="image1" src={image2} alt="{image}" />
                        </div>
                </div>
        );
}
