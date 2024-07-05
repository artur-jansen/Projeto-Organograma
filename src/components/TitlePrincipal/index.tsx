import React from "react";
import styled from "styled-components";
import Barrinha from "../Bar/index.tsx";

const ContainerSecaoTitulo = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
`

const Titulo = styled.h1`
    font-size: 2rem;
    color: var(--cor-principal-azul);
    margin: 0;
`

const TituloPrincipal = () => {
    return(
        <ContainerSecaoTitulo>
            <Titulo>Minha organização:</Titulo>
            <Barrinha/>
        </ContainerSecaoTitulo>
    );
}

export default TituloPrincipal;