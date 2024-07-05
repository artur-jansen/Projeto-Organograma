import React from "react";
import styled from "styled-components";
import Barrinha from "../Bar/index.tsx";

const ListaSuspensa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 24px;
    gap: 0.8rem;
`

const ListaSuspensaContainerLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
`

const ListaSuspensaLabel = styled.label`
    font-size: 1.5rem;
`

const ListaSuspensaSelect = styled.select`
    border: none;
    border-bottom: 1px solid var(--cor-principal-azul);
    background-color: white;
    outline: none;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    font-size: 1.2rem;
    padding: 14px 4px;
    box-sizing: border-box;
`

const List = ({ label, itens = [], obrigatorio, valor, changeValue }) => {
    return (
        <ListaSuspensa>
            <ListaSuspensaContainerLabel>
                <Barrinha largura="2px" altura="30px"/>
                <ListaSuspensaLabel>{label}</ListaSuspensaLabel>
            </ListaSuspensaContainerLabel>
            <ListaSuspensaSelect onChange={evento => changeValue(evento.target.value)} required={obrigatorio} value={valor}>
                <option value=""></option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </ListaSuspensaSelect>
        </ListaSuspensa>
    );
}

export default List;
