import React from "react";
import "./Welcome.css";

import { useNavigate } from "react-router-dom"
import image2 from "../assets/image2.png"

export default function Welcome() {

        const navigate = useNavigate()
       

        return (
                <div className="welcome">
                        <div className="welcomeDesc">
                                <span>
                                        CREATE YOUR RENT <br /> WALLET
                                </span>

                                <button onClick={() => navigate("/dashboard")} type="button" className="joinBtn">Join now ➜ </button>
                        </div>

                        <div className="welcomeImage">
                                <img className="welcomeImg" src={image2} alt="{image}" />
                        </div>
                </div>
        );
}
