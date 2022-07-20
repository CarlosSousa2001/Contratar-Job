import React from "react";
import styled from 'styled-components'

const AreaHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid black;
background-color: #ccc;
padding: 10px;
`
const AreaButton = styled.div`
display: flex;
gap: 10px;
   button {
    width: 120px;
    height: 40px;
   }
`


const Header = (props) => {
    return (
        <div>
            <AreaHeader>
                <h1>Labeninja</h1>
                <AreaButton>
                    <button onClick={() => props.trocarTela('home')}>Home</button>
                    <button onClick={() => props.trocarTela('cart')}>Carrinho</button>
                </AreaButton>
            </AreaHeader>
        </div>
    )
}
export default Header;