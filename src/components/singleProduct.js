import React from 'react';
import styled from 'styled-components'

function SingleProduct () {
    return (
                <Product>
                    <div className="img-con">
                        <img src="https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359" alt=""/>
                    </div>
                    <div className="price-info">
                        <p> Modern Poster </p>
                        <p>$30.99</p>
                    </div>
                </Product>
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
        max-width: 270px;
        margin-bottom: 0.3rem;
        
        img {
            object-fit: cover;
            height: 200px;
            width: 270px;
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