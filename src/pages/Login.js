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
            <div className="banner">
                <Container>
                    <h1> Cart </h1>
                </Container>
            </div>   
            <Container>
                <section className="section">
                <table>
                    <tbody>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                        <th></th>
                    </tr>
                    { cart.map((item)=> {
                        return (
                        <tr key={item.images[0]['url']}>
                            <td>
                                <p> {item.name}  </p>
                                <img src={ item.images[0]['url'] } alt="" />
                            </td>
                            <td> $ {item.price / 100} </td>
                            <td>
                                <div className="counter">                    
                                    <span className="counts" onClick = { ()=>decreaseCart( item ) } > - </span> &nbsp; { item.amount } &nbsp; <span className="counts" onClick = { ()=>increaseCart( item )} > + </span>
                                </div>                                
                            </td>
                            <td> { (item.price * item.amount) / 100 } </td>
                            <td onClick={ ()=>delPro(item) }>Delete</td>
                        </tr>
                        )
                    }) }
                </tbody>                    
                </table>   
                </section> 

                <button onClick={ clearCart }> clear cart</button>
                <p> Sub total : { subTotal } </p>                 
                <p> Tax : { tax } </p>
                <p> total : { total }  </p>

                <Link to="/products"> Go back and shop </Link>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .banner {
        background-color: #eaded7;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: helvetica;
        color: #453227;        
    }

    .section {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
    }

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;

        img {
            height: 80px;
            width: 110px;
        }
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }    
`

const Container = styled.div`
        max-width: 90%;
        margin: 0 auto;
`


export default CartPage