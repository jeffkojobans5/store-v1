import React  from 'react';
import styled from 'styled-components'
import { ProductsContext } from '../contexts/ProductsContext'
import { FilterContext } from '../contexts/FilterContext'

function Filter () {

    const { category , company , color } = React.useContext(ProductsContext)

    const {
        filters: { search , cate , comp , colors , price , shipping  } ,
        filterFunc , 
        resetFill 
      } = React.useContext(FilterContext);



    return (
        <Wrapper>
{/* search  */}
            <input 
            type="text"
            placeholder="search"
            onChange = { filterFunc }
            value = { search }
            name = 'search'
            />

{/* category */}
            <div className="category">
                <p className="header"> Category </p>
                { category.map((item)=> {
                    return (
                        <div className="buttons" key={item}>
                            <button 
                            name="cate" 
                            data = { cate }
                            className = {`${
                                cate === item ? 'active' : null
                                }`}     
                            onClick={ (e)=> filterFunc(e) }>{item}</button> <br/>
                            
                        </div>                            
                    )
                })}
            </div>

{/* company */}
            <div className="company">
                <p className="header"> Company </p>
                    <select name="comp" id="company" value = { comp } onChange = { filterFunc }>
                        { company.map((item)=> {
                            return (
                                <option 
                                    value= { item }  
                                    key={item} > { item[0].toUpperCase() + item.slice(1 , item.length) } 
                                </option>
                            )
                        }) }                        
                    </select>
            </div>

{/* color */}
            <div className="company">
                <p className="header"> Colors </p>
                    { color.map((item)=> {
                        return (
                            <div className="buttons" key={item}>
                                <button 
                                name="colors" 
                                className = {`${
                                colors === item ? 'active' : null
                                }`}                               
                                onClick={ (e)=> filterFunc(e) }>{item}</button> <br/>
                            </div>                            
                        )
                    }) }                      
            </div>

{/* price range */}
        <div className="company">
                <p className="header"> Price </p> <br/>
                <label> $ { price } </label> <br/>
                <input 
                    type="range" 
                    id="price" 
                    name="price"
                    onChange={(e)=>filterFunc(e)}
                    value={price}
                    min="0" 
                    max="310000" />           
            </div>

{/* shippping */}
            <div className="company">
                <p className="header"> Shipping </p> <br/>
                <label htmlFor="vehicle1"> Free Shipping </label>
                <input 
                    type="checkbox" 
                    id="shipping" 
                    name="shipping" 
                    checked = {shipping}    
                    onChange = {(e)=>filterFunc(e)}               
                />
            </div>  

{/* clear filters */}
            <div className="company">
                <button 
                className="reset"
                onClick={ resetFill }>
                Clear Filter </button>
            </div>  
        </Wrapper>  
    )
}

const Wrapper = styled.div`
    flex: 3;
    font-family: helvetica;
    letter-spacing: 0.1rem;
    margin-bottom: 4rem;

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

    button.reset {
        background-color: crimson;
        border: 1px solid crimson;
        color: white;
        padding: 0.4rem;
        border-radius: 5px;
        letter-spacing: 0.1rem;
        transition: 0.3s all;
    }

    button.reset:hover {
        background-color: white;
        border: 1px solid crimson;
        color: crimson;
    }

    .active {
        border-bottom: 2px solid gray;
    }
`

export default Filter