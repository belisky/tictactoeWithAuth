import './LoginRegister.css'
import React,{useState} from 'react'

const LoginRegister = () => {
    const [toggle,setToggle]=useState(true)

    const toggleForms=()=> {
        setToggle(false);
    }
    const toggleRForms=()=> {
        setToggle(true);
    }
     

    return (
        <div className="register-page">
            <div className="card">
                <div className="headings">
 
                    <p onClick={toggleForms} className={`heading__item  ${toggle ? "":"heading__login"}`} >Login</p>
                    <p onClick={toggleRForms} className={`heading__item  ${!toggle ? "":"heading__login"}`}>Register </p>
                </div>
                <div className={`forms${toggle ? "-t":""}`}>
                    
                    <p className="form__heading">Login</p>
                    
                    <input type="text" className="inputs" placeholder="Name"/>
                     
                    <input type="password" className="inputs" placeholder="Password"/>
                    <button className="submit-btn">Login</button>
                    <p className="no-padding">Forgot password? reset here!</p>
                    <p className="no-padding">New here, Register instead!!</p>
                </div>
                <div className={`register-forms${toggle ? "-t":""}`}>                    
                    <p className="form__heading">Register</p>
                    <input type="text" className="inputs" placeholder="Name"/>
                     
                    <input type="password" className="inputs" placeholder="Password"/>
                    <button className="submit-btn">Sign Up</button>
                    <p className="no-padding">Already have an account? Login</p>
                   
                </div>
            
            </div>
        </div>
    )
}

export default LoginRegister
