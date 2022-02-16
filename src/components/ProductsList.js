import React from 'react';
import styled from 'styled-components';
import SingleProduct from './singleProduct';
import { ProductsContext } from '../contexts/ProductsContext';

function ProductsList () {

    const { products } = React.useContext(ProductsContext)

    return (
        <Wrapper> 
            <p> { products.length } Products Found </p>
            <div className="products">
                <SingleProduct />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    padding-left: 1rem;
    flex: 10;

    .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    }   

    p {
        font-family: Helvetica;
        margin-bottom: 1rem;
    }

`

export default ProductsList