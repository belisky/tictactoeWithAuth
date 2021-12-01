 
import  {useState} from 'react'
import { useNavigate } from 'react-router'


const LoginRegisterLogic = () => {
    const navigate=useNavigate();
    const [toggle,setToggle]=useState(true);

    const toggleForms=()=> {
        setToggle(false);
    }
    const toggleRForms=()=> {
        setToggle(true);
    }
    const login =()=> {
        navigate("/gamehome/");

    }
    const register=()=> {
        navigate("/")
    }
    return {register,login,toggleForms,toggleRForms,toggle};
}

export default LoginRegisterLogic
