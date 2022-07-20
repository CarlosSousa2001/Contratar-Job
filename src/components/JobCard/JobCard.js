import React from "react";
import styled from 'styled-components'
import { convertDate } from "../../utils/convertData";

const AreaJob = styled.div`
border: 1px solid black;
background-color: darkgray;
padding: 0px 6px;
display: flex;
flex-direction: column;
gap: 20px;
`
const AreaJobButton = styled.div`

`
const JobCard = (props) => {
    return (
        <div>JobCard
            <AreaJob>
            <h1>{props.item.title}</h1>
            <p>Preço R${props.item.price.toFixed(2)}</p>
            <p>Paazo {convertDate(props.item.dueDate)}</p>
            <AreaJobButton>
            <button onClick={()=>props.receberId(props.item.id)}>Ver detalhes</button>
            <button>Adicionar ao carrinho</button>
            </AreaJobButton>
            </AreaJob>
        </div>
    )
}
export default JobCard;