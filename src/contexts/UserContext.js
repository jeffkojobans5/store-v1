import axios from 'axios';
import { useState , createContext, useContext , useEffect } from 'react'
import { CartContext } from '../contexts/CartContext';

export const UserContext = createContext();

function getUserFromLocalStorage() {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { username: null, token: null };
  }

export function UserProvider ( { children } ) {
    const [user, setUser] = useState(getUserFromLocalStorage());
    // const { clearCart } = useContext(CartContext)
    
    const [ userDetails , setUserDetails] = useState(
        {
            username : "",
            email : "",
            password : ""
        }
        )
        
        const submit = async () => {
            axios.post('http://localhost:1337/api/auth/local/register' , userDetails).then((response)=>{
            setUser({ username : response.data.user.username , token : response.data.jwt})
            localStorage.setItem("user", JSON.stringify({ username : response.data.user.username , token : response.data.jwt} )); 
        }).catch((error)=>{
            console.log(error.response.data);
        })
      }

    function handleRegister (e) {
        setUserDetails({
            ...userDetails , [e.target.name] : [e.target.value].toString()
        })
        // clearCart()
    }

    function logOut () {
        setUser({ username : null , token : null})
    }

    return (
        <UserContext.Provider 
        value = { { userDetails , handleRegister , submit , user , logOut }  } >
            { children }
        </UserContext.Provider>
    )
}

