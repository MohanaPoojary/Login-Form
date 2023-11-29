import React from 'react';

const Header = () => {
    return(
        <div className = "login-form" >
            <form>
                <div>
                    <input type = "text"  placeholder = "Enter your name"/>
                </div>
                <br/>
                <div>
                    <input type = "password"  placeholder = "Enter your password"/>
                </div>
            </form>
        </div>
    )
}

export default Header;