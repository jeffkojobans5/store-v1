import { useEffect , useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ProductsContext } from '../contexts/ProductsContext'
import Loading from '../components/Loading'
import axios from 'axios'

function Product () {
    // const { loading , products } = useContext(ProductsContext)
    const { id } = useParams()

    // const currentProd = products.filter((item)=> {
    //     return item.id == id
    // })

    const [product , setProduct] = useState([])
    const [loading , setLoading] = useState(true)

    function getSingleItem () {
        axios.get(`https://course-api.com/react-store-single-product?id=${id}` ).then((response)=>{
            console.log(response.data)
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
                        <p> {product.description} </p>
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
`   

const Container = styled.div`
        max-width: 90%;
        margin: 0 auto;
`


export default Product