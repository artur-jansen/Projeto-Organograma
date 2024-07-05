import React from "react";
import styled from "styled-components";
import Facebook from "../../imagens/fb.png";
import Instagram from "../../imagens/ig.png";
import Twitter from "../../imagens/tw.png";
import tituloOrganize from "../../imagens/tituloOrganize.png";

const RodapeContainer = styled.footer`
    background-color: var(--cor-principal-branco);
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const RedesSociais = styled.div`
    display: flex;
    gap: 1rem;
`

const Icon = styled.img`
    width: 30px;
    height: 30px;
    padding: 0.2rem;
    cursor: pointer;
    
    &:hover{
        width: 31px;
        height: 33px;
        transition: 1s;
    }
`

const LogoOrganize = styled.img`
    width: 20%;
`

const Rodape = () => {
    return(
        <RodapeContainer>
            <RedesSociais>
                <Icon src={Facebook} alt="icon facebook" />
                <Icon src={Instagram} alt="icon instragram" />
                <Icon src={Twitter} alt="icon twitter" />
            </RedesSociais>
            <LogoOrganize src={tituloOrganize} alt="logo organize" />
            <h3>Desenvolvido por Artur</h3>
        </RodapeContainer>
    )
}

export default Rodape;