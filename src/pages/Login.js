import { useState , useContext } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../contexts/UserContext';

function CartPage () {
    const { userDetails , handleRegister , submit } = useContext(UserContext)

    
    return (
        <Wrapper>
            <Container>
                <div className="form">
                <form onSubmit={ submit }>
                    <p>LOGIN </p>
                    <input 
                    type="text" 
                    name="email"        
                    placeholder="email"   
                    value={userDetails.email}
                    onChange = { (e)=>handleRegister(e) }                         
                    />

                    <input 
                    type="password" 
                    name="password"        
                    placeholder="password"     
                    value={userDetails.password}
                    onChange = { (e)=>handleRegister(e) }                         
                    />         

                    <input 
                    type="text" 
                    name="username"        
                    placeholder="username"   
                    value={userDetails.username}
                    onChange = { (e)=>handleRegister(e) }                         
                    />
                    <button 
                    type="submit"
                    > SUBMIT </button>           
                </form>    
                </div>

                <div className="form">
                    <p>REGISTER </p>
                    <input 
                    type="text" 
                    name="email"        
                    placeholder="email"                            
                    />

                    <input 
                    type="password" 
                    name="email"        
                    placeholder="password"                            
                    />       

                    <input 
                    type="text" 
                    name="email"        
                    placeholder="username"                            
                    />                        

                    <button 
                    type="submit"

                    > SUBMIT </button>           
                </div>                
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`

const Container = styled.div`
        max-width: 90%;
        margin: 0 auto;

        .form {
            margin: 0 auto;
            width: 70%;
            background-color: whitesmoke;
            margin-top: 3rem;
            padding: 2rem;

            p {
                text-align: center;
            }
            input , button{
                margin: 0 auto;
                display: block;
                padding: 1rem;
                outline: none;
            }
        }
`


export default CartPage