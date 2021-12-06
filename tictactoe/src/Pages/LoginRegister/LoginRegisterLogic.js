 
import  {useState} from 'react'
import { useNavigate } from 'react-router'
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword} from '@firebase/auth'
import { auth } from '../../Config/firebase-config'



const LoginRegisterLogic = () => {
    const [loginEmail,setLoginEmail]=useState("");
    const [loginPass,setLoginPass]=useState("");
    const navigate=useNavigate();
    const [toggle,setToggle]=useState(true);

    const setPass=(e)=> (setLoginPass(e.target.value))

    
    const setEmail=(e)=>(setLoginEmail(e.target.value))

    
    

    const toggleForms=()=> {
        setToggle(false);
    }
    const toggleRForms=()=> {
        setToggle(true);
    }
    const login =async()=> {
        try{
            await signInWithEmailAndPassword(auth,loginPass,loginEmail);
            navigate("/gamehome/");
        } catch(error){
            console.log(error.message);
        }

        

    }
    const register=async()=> {
        try {
            await createUserWithEmailAndPassword (auth,loginPass,loginEmail);
            setToggle(prev=>!prev)
        navigate("/")
    } catch(error){
        console.log(error.message)
    }
}
    return {register,login,toggleForms,toggleRForms,toggle,setPass,setEmail};
}

export default LoginRegisterLogic
