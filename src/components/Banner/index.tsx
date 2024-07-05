import React from "react";
import logoOrganize from "../../imagens/imgOrganize.png";
import tituloOrganize from "../../imagens/tituloOrganize.png";
import styled from "styled-components";
import "../../index.css"

const ContainerBanner = styled.header`
    background-color: var(--cor-principal-branco);
    display: flex;
`
const ContainerTitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ContainerLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ImagemTitulo = styled.img`
    width: 80%;
`
const ImagemLogo = styled.img`
    width: 80%;
`
const Subtitulo = styled.h3`
    margin: 0 0 0 1.5rem;
    color: var(--cor-principal-azul);
    font-size: 1.5rem;
`

const Banner = () => {
    return(
        <ContainerBanner>
            <ContainerTitulo>
                <ImagemTitulo src={tituloOrganize} alt="Titulo do Organize" />
                <Subtitulo>Gerenciamento de Equipe</Subtitulo>
            </ContainerTitulo>
            <ContainerLogo>
                <ImagemLogo src={logoOrganize} alt="Logo do Organize" />
            </ContainerLogo>
        </ContainerBanner>
    )

}

export default Banner;