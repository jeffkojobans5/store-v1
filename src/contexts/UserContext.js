import axios from 'axios';
import { useState , createContext, useEffect } from 'react'

export const UserContext = createContext();

export function UserProvider ( { children } ) {
    let [ login , isLogin ] = useState(false);
    const [ userDetails , setUserDetails] = useState(
        {
            username : "",
            email : "",
            password : ""
        }
    )

    const submit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:1337/api/auth/local/register', userDetails);

        } catch (err) {
          console.log(err.response.data);
        }
      }

    function handleRegister (e) {
        setUserDetails({
            ...userDetails , [e.target.name] : [e.target.value].toString()
        })
    }


    return (

        <UserContext.Provider 
        value = { { userDetails , handleRegister , submit }  } >
            { children }
        </UserContext.Provider>
    )
}

