import React from "react";
import styled from "styled-components";

const BarrinhaDiv = styled.div`
    width: ${props => props.width || '100px' };
    height: ${props => props.height || '3px' };
    background-color: ${props => props.bgcolor || 'var(--cor-principal-azul)'};
`
const Barrinha = ({cor, largura, altura}) => {
    return(
        <BarrinhaDiv bgcolor={cor} width={largura} height={altura} />
    );
}

export default Barrinha