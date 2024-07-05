import React from "react";
import styled from "styled-components";
import Barrinha from "../Bar/index.tsx";


const CampoTexto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 24px;
    gap: 0.8rem;
`

const CampoTextoLabelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
`

const CampoTextoLabel = styled.label`
    font-size: 1.5rem;
`

const CampoTextoInput = styled.input`
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

const TextField = ({changeValue, label, valor, type, placeholder, obrigatorio}) => {

    const changeWriting = (evento) => {
        changeValue(evento.target.value);
    }

    return(
        <CampoTexto>
            <CampoTextoLabelContainer>
                <Barrinha largura ="2px" altura="30px"/>
                <CampoTextoLabel>{label}: </CampoTextoLabel>
            </CampoTextoLabelContainer>
            <CampoTextoInput value={valor} onChange={changeWriting} type={type} placeholder={`${placeholder}...`} required={obrigatorio}/>
        </CampoTexto>
    );
}

export default TextField;