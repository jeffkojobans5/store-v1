import { useState , useContext } from 'react';
import styled from 'styled-components'
import { CartContext } from '../contexts/CartContext';

function CartPage () {
    const { cart , increaseCart , decreaseCart , delPro } = useContext(CartContext)

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
                        <tr key={item.name}>
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
                            <td>Germany</td>
                            <td onClick={ ()=>delPro(item) }>Delete</td>
                        </tr>
                        )
                    }) }
                </tbody>                    
                </table>                    
                </section> 
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