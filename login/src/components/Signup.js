import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return(
        <div className = "signup-form" >
            <form>
                <div>
                    <h2>Signup Here</h2>
                </div>
                <div>
                    <input type = "text"  placeholder = "Enter your name"/>
                </div>
                <br/>
                <div>
                    <input type = "password"  placeholder = "Enter your password"/>
                </div>
                <br/>
                <div>
                    <Link to="/Login">
                    <button type = "button" > Signup </button>
                    </Link>
                </div>   
            </form>
        </div>
    )
}

export default Signup;