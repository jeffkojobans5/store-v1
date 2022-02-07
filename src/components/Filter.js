import styled from 'styled-components'
function Filter () {
    return (
        <Wrapper>
            <input 
            type="text"
            placeholder="search"
            />

            <div className="category">
                <p> Category </p>
                <button type="button"> All natoins </button>
            </div>
        </Wrapper>        
    )
}

const Wrapper = styled.div`
    ${'' /* background-color: #366377; */}
    flex: 2;
    font-family: helvetica;
    letter-spacing: 0.1rem;

    input[type='text'] {
        border: 0px ;
        padding: 0.5rem;
        background-color: whitesmoke;
        outline: none;
        color: gray;
        font-size: 0.9rem;
        letter-spacing: 0.1rem;
        border-radius: 2px;
    }

    .category {
        margin-top: 2rem;
    }
    button {
        color: gray;
        border: none;
        background-color: transparent ;
    }
`

export default Filter