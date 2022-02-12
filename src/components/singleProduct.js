import React , { useContext } from 'react';
import styled from 'styled-components'
import { ProductsContext } from '../contexts/ProductsContext';

function SingleProduct () {

    const { products } = useContext(ProductsContext)

    return (
        <>
            { products.map((singleProduct)=>{

                const { image , name , price } = singleProduct;

                return (
                    <Product key={image}>
                        <div className="img-con">
                            <img src={image} alt=""/>
                        </div>
                        <div className="price-info">
                            <p> { name[0].toUpperCase() + name.slice(1, name.length ) } </p>
                            <p> { price } </p>
                        </div>
                    </Product>
                )
            })}
        </>    
    )
}

const Product = styled.div`
        height: 250px;
        width: 300px;

    p {
        font-family: Helvetica;
    }

    
    .img-con {
        height: 200px;
        max-width: 300px;
        margin-bottom: 0.3rem;
        
        img {
            object-fit: cover;
            height: 200px;
            width: 300px;
            border-radius : 5px;
        }
    }

    .price-info {
        display: flex;
        letter-spacing: 0.1rem;
        color: #453227;
        
        p {
            flex: 1;
        }

        p:last-child {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            color: 
        }
    }
`

export default SingleProduct