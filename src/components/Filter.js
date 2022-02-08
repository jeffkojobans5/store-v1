import React from 'react';
import styled from 'styled-components'
import {ProductsContext} from '../contexts/ProductsContext'

function Filter () {

    const { category , company , color } = React.useContext(ProductsContext)


    return (
        <Wrapper>
{/* search  */}
            <input 
            type="text"
            placeholder="search"
            />

{/* category */}
            <div className="category">
                <p className="header"> Category </p>
                { category.map((item)=> {
                    return (
                        <div className="buttons" key={item}>
                            <button > { item[0].toUpperCase() + item.slice(1 , item.length) } </button> <br/>
                        </div>                            
                    )
                }) }
            </div>

{/* company */}
            <div className="company">
                <p className="header"> Category </p>
                    <select name="company" id="company">
                        { company.map((item)=> {
                            return (
                                <option value= { { item }} key={item} > { item[0].toUpperCase() + item.slice(1 , item.length) } </option>
                            )
                        }) }                        
                    </select>
            </div>

{/* color */}
            <div className="company">
                <p className="header"> Category </p>
                    { color.map((item)=> {
                        return (
                            <div className="buttons" key={item}>
                                <button > { item[0].toUpperCase() + item.slice(1 , item.length) } </button> <br/>
                            </div>                            
                        )
                    }) }                      
            </div>

        </Wrapper>        
    )
}

const Wrapper = styled.div`
    flex: 2;
    font-family: helvetica;
    letter-spacing: 0.1rem;

    input[type='text']  {
        border: 0px ;
        padding: 0.5rem;
        background-color: whitesmoke;
        outline: none;
        color: gray;
        font-size: 0.9rem;
        letter-spacing: 0.1rem;
        border-radius: 2px;
    }

    .category , .company {
        margin-top: 2rem;

        p.header {
            font-size: 1.1rem;
            font-weight: bold;
        }
    }

    .buttons {
        margin-top: 0.5rem;
    }

    button {
        color: gray;
        border: none;
        background-color: transparent ;
        line-height: 1.2rem;
        font-size: 0.9rem;

        &:hover {
            cursor : pointer;
        }
    }

    .company select {
        margin-top: 0.5rem;
        outline: none;
        padding: 0.5rem;
        border: none;
        background-color: whitesmoke;
        letter-spacing: 0.1rem;

    }
`

export default Filter