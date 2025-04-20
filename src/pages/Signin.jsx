import React, { useState } from "react";
import "../css/signin.css";

function Signin(){
    const [signin,setSignin] = useState(true);
    return(
        <>
            <div className="main-sign">
                <div className="in-main-sign">
                    <div className="type">
                        <h1 >{signin ? "Sign in" : "Sign up"}</h1>
                    </div>
                    <div className="signin" style={{
                        display : signin ? "flex" : "none"
                    }}>
                        <input type="email" placeholder="Email"/>
                        <input type="password" name="pass" id="pass" placeholder="Password"/>
                        <button id="login">
                            Login
                        </button>
                        <p onClick={() => setSignin(false)} id="signup-d">Sign up</p>
                    </div>
                    <div className="signup" style={{
                        display : !signin ? "flex" : "none"
                    }}>
                        <input type="text" id="first-name" placeholder="First name"/>
                        <input type="text" id="lasr-name" placeholder="Last name"/>
                        <input type="email" name="mail" id="mail" placeholder="Email"/>
                        <input type="password" name="" id="signup-password" placeholder="Password"/>
                        <input type="password" name="" id="signup-con-password" placeholder="conform Password"/>
                        <button id="register">Register</button>
                        <p onClick={() => setSignin(true)} id="sign-in-d">Sign in</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signin;