import React from 'react';

const Signup = () => {
    return(
        <div className = "Signup-form" >
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
                    <button type = "button" > Signup in</button>
                </div>
                
            </form>
        </div>
    )
}

export default Signup;