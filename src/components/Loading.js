import React from 'react'
import styled from 'styled-components'

function Loading () {
    return (
        <Wrapper>
            <p> Loading </p>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;

    p {
        font-family: Helvetica, arial, sans-serif;
        text-align: center;
    }
`
export default Loading