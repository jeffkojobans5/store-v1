import { useEffect , useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ProductsContext } from '../contexts/ProductsContext'
import { FilterContext } from '../contexts/FilterContext'
import { CartContext } from '../contexts/CartContext'
import Loading from '../components/Loading'
import axios from 'axios'

function Product () {
    const { id } = useParams()

    const [product , setProduct] = useState([])
    const [loading , setLoading] = useState(true)
    const [counter , setCounter] = useState(1)

    const { cart , sendCart } = useContext(CartContext)

    function getSingleItem () {
        axios.get(`https://course-api.com/react-store-single-product?id=${id}` ).then((response)=>{
            // console.log(response.data)
            setProduct(response.data)
            setLoading(false)
        }).catch((error)=>{
            console.log(error)
        })
    }

      useEffect(()=>{
        getSingleItem()
      },[])

    if(loading){
        return (
            <h1> Loading </h1>
        )
    }

    function decrease  () {
        setCounter((counter)=>{
            if(counter === 1) {
                return counter = 1
            }
            return counter = counter - 1
        })
    }

    function increase  () {
        setCounter((counter)=>{
            if(counter >= product.stock) {
                return counter = product.stock
            }
            return counter = counter + 1
        })
    }

    // function sendCart ( ) {
    //     const item = [...cart].find(item  => item.id === id)
    //     let empty = [];
    //     if(item){
    //         empty = [...cart , { ...item , quantity: counter }]
    //     }   else    {
    //         empty = [...cart , { ...product, quantity: counter}]
    //     }
    //     setCart(empty)
    // }

    return (
        <Wrapper>
            <div className="banner">
                <Container>
                    <h1> {product.name} </h1>
                </Container>
            </div>  

            <Container>
                <div className="section">
                    <div className="image">
                        <img src={ product.images[0].url } alt={product.name} />
                    </div>
                    <div className="details">
                        <h1> {product.name} </h1>
                        <p>  {product.description} </p>
                        <p>  {product.price / 100} </p> 
                        { product.stock }
                    <div className="counter">                    
                        <span className="counts" onClick = { ()=>decrease(counter)} > - </span> &nbsp; {counter} &nbsp; <span className="counts" onClick = { ()=>increase(counter)} > + </span>
                    </div>
                        <button type="button" onClick={ ()=>sendCart( product.id , product) }>   Addd to Cart</button>
                    </div>
                </div>
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    font-family: helvetica;
    
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
        width: 80%;
        background-color: whitesmoke;
        margin: 0 auto;
        display: flex;
        margin-top: 3rem;

        .image {

            img {
                max-width: 100%;
            }
        }
    }

    .details {
        padding: 1rem;
        background-color: whitesmoke;
        
        p {
            color: gray;
            line-height: 1.5rem;
            text-align: justify;
            margin-top: 1rem;
        }
    }

    .details , .image {
        flex: 1;
    }

    .details h1 {
        color: #453227;
    }

    .counter {
        margin-top: 1rem;

        .counts {
            padding: 0.5rem;
            width: 5px;
            height: 5px;
            margin-right: 0.6rem;
            background-color: #453227;
            color: white;
            cursor: pointer;
        }
    }

    button {
        margin-top: 1rem;
        padding: 1rem;
        border: none;
        background-color: brown;
        color: white;
    }
`   

const Container = styled.div`
        max-width: 90%;
        margin: 0 auto;
`


export default Product