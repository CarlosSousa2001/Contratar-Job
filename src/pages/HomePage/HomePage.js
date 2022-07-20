import React from "react";
import styled from 'styled-components'

const AreaHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
const AreaButtons = styled.div`
    display: flex;
    gap: 30px;
    button {
        width: 200px;
        height: 40px;
    }
`
class HomePage extends React.Component {
    render() {
        return (
            <div>
                <AreaHome>
                    <h2>Labeninja</h2>
                    <p>O talento certo no momento certo</p>
                    <AreaButtons>
                        <button onClick={() => this.props.trocarTela('form')}>Quero ser um Ninja</button>
                        <button onClick={() => this.props.trocarTela('list')}>Contratar um ninja</button>
                    </AreaButtons>
                </AreaHome>
            </div>
        )
    }
}
export default HomePage;
