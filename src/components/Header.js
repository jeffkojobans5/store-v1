import { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext';

function Header () {

    const { cart } = useContext(CartContext)
    
    const calculateTotalCart = cart.reduce((curr , prev)=> {
         return curr + prev.amount 
    },0)

    console.log(calculateTotalCart);

    return (
        <Nav>
            <Container> 
                <ul>
                    <Link to="/"><li> Home </li> </Link>
                    <Link to="/"><li> About </li> </Link>
                    <Link to="/products"><li> Products </li> </Link>
                    <Link to="/cart"><li> Cart  <span className="cart"> { calculateTotalCart } </span> </li> </Link>
                </ul>
            </Container>
        </Nav>
    )
}

const Nav = styled.div`
    background-color: #f1f1f1;
    padding-top: 20px;
    padding-bottom: 20px;

    ul {
        ${'' /* background-color: red; */}
        display: flex;
        justify-content: space-around;
        max-width: 50%;
        margin: 0 auto;
        
        a{
            flex: 1;
            ${'' /* background-color: yellow; */}
            text-align: center;
            text-decoration: none;
            font-family: helvetica;
            font-size: 1rem;
            color: gray;
            
            &:hover {
                color: #453227;
            }
        }
    }
    
    ul li {
        list-style-type: none;
        flex: 1;
    }

    h1 {
        color: white;
    }

    .cart {
        position: relative;
        top: -10px;
        left: -5px;
        color: white;
        font-size: 0.7rem;
        background-color: #936a53;
        padding: .2rem;
        border-radius: 100%;
    }
`

const Container = styled.div`
    max-width: 90%;
    ${'' /* background-color: red; */}
    margin: 0 auto;
`


export default Header