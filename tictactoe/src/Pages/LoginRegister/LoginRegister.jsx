import './LoginRegister.css'
import React from 'react'

const LoginRegister = () => {
    return (
        <div className="register-page">
            <div className="card">
                <div className="headings">
 
                    <label className="heading__item" htmlFor="toggle-login">Login</label>
                    <p className="heading__item">Register</p>
                </div>
                <input type="checkbox" className="toggle-login" id="toggle-login"/>
                <div className="forms">
                    
                    <p className="form__heading">Login</p>
                    <label className="labels">Name</label>
                    <input type="text" className="inputs"/>
                    <label className="labels">Password</label>
                    <input type="password" className="inputs" />
                    <button className="submit-btn">Login</button>
                </div>
                <div className="register-forms">                    
                    <p className="form__heading">Register</p>
                    <label className="labels">Name</label>
                    <input type="text" className="inputs"/>
                    <label className="labels">Password</label>
                    <input type="password" className="inputs" />
                    <button className="submit-btn">Sign Up</button>
                </div>
            
            </div>
        </div>
    )
}

export default LoginRegister
