import { useState , useContext } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CartContext } from '../contexts/CartContext';

function CartPage () {
    const { cart , increaseCart , decreaseCart , delPro , subTotal , total , tax , clearCart } = useContext(CartContext)

    if(cart.length == 0){
        return (
          <>
            <h1> Cart is empty </h1>
            <Link to="/products"> Oya Fill am </Link>
          </>           
        )
    }
    
    return (
        <Wrapper>
            <Container>
                <div className="form">
                    <p>LOGIN </p>
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

                    <button 
                    type="submit"

                    > SUBMIT </button>           
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