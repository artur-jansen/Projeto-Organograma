import React from "react";
import styled from "styled-components";

const BotaoForm = styled.button`
    background-color: var(--cor-principal-azul);
    border-radius: 8px;
    font-size: 18px;
    font-wheight: 700;
    padding: 20px;
    border: none;
    cursor: pointer;
    color: var(--cor-principal-branco);
    margin: 1rem 1.5rem;

    &:hover{
        transition: 1s;
        border: 1px solid var(--cor-principal-azul);
        color: var(--cor-principal-azul);
        background-color: transparent;
    }
`

const Botao = ({children}) => {
    return(
        <BotaoForm>{children}</BotaoForm>
    );
}

export default Botao;