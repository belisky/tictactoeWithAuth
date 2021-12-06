import './LoginRegister.css'
import React  from 'react'
import LoginRegisterLogic from './LoginRegisterLogic'
const LoginRegister = () => {
    const {register,login,toggleForms,toggleRForms,toggle,setPass,setEmail}=LoginRegisterLogic();
   
     

    return (
        <div className="register-page">
            <div className="container">
                <div className="hero">
                    <h1>Wana be a master of tictactoe?</h1>
                    <h3>Register to play and win amazing prizes!!!</h3>
                </div>
                <div className="card">
                    <div className="headings">
                        <p onClick={toggleForms} className={`heading__item  ${toggle ? "heading__login":""}`} >Login</p>
                        <p onClick={toggleRForms} className={`heading__item  ${!toggle ? "heading__login":""}`}>Register </p>
                    </div>
                    <div className={`forms${toggle ? "-t":""}`}>
                
                        <p className="form__heading">Login</p>
                
                        <input type="text" onChange={setEmail} className="inputs" placeholder="Name"/>
                
                        <input type="password" onChange={setPass} className="inputs" placeholder="Password"/>
                        <button onClick={login} className="submit-btn">Login</button>
                        <p className="no-padding">Forgot password? reset here!</p>
                        <p className="no-padding">New here, Register instead!!</p>
                    </div>
                    <div className={`register-forms${toggle ? "-t":""}`}>
                        <p className="form__heading">Register</p>
                        <input type="text" className="inputs" placeholder="Name"/>
                
                        <input type="password" className="inputs" placeholder="Password"/>
                        <button onClick={register} className="submit-btn">Sign Up</button>
                        <p className="no-padding">Already have an account? Login</p>
                
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default LoginRegister
