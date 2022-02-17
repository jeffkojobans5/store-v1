import { useContext } from 'react'
import styled from 'styled-components'
import Filter from '../components/Filter'
import ProductsList from '../components/ProductsList'
import { ProductsContext } from '../contexts/ProductsContext'
import { FilterContext } from '../contexts/FilterContext'
import Loading from '../components/Loading'

function ProductsPage () {
    const { loading } = useContext(ProductsContext)

    return (
        <Wrapper>
            <div className="banner">
                <Container>
                    <h1> Products Page</h1>
                </Container>
            </div>   
            <Container>
                <section className="section">
                    <Filter />
                    { loading ? <Loading /> : <ProductsList /> }
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
`

const Container = styled.div`
        max-width: 90%;
        margin: 0 auto;
`


export default ProductsPage