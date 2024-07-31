import React from "react";
import styled from "styled-components";
import Delete from "../../imagens/lixeira.png";
import perfilVazio from "../../imagens/perfilVazio.jpg"

interface CardProps {
    cor?: string;
}

const CardContainer = styled.div`
    width: 280px;
`;

const CardContainerBloco1 = styled.div<CardProps>`
    background-color: ${props => props.cor || 'var(--cor-principal-branco)'};
    border-radius: 10px 10px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardContainerBloco2 = styled.div`
    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardContainerImg = styled.img`
    width: 100px;
    border-radius: 50%;
    position: relative;
    bottom: -50px;
`;

const CardContainerNome = styled.h4`
    color: #8B8989;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const CardContainerCargo = styled.h5<CardProps>`
    font-size: 18px;
    line-height: 22px;
    color: ${props => props.cor || '#212121'};
    padding: 0 16px;
`;

const CardContainerButtonDelete = styled.button`
    background-color: transparent;
    border: 2px solid white;
    border-radius: 50px;
    align-self: flex-start;
    margin: 0.5rem 0 0 0.5rem;
    padding: 0.4rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardContainerDeleteIcon = styled.img`
    width: 28px;
`;

const Card = ({ imagem, nome, cargo, corFundo, corNome, onDelete }) => {
    const imageSrc = imagem ? imagem : perfilVazio
    return (
        <CardContainer>
            <CardContainerBloco1 cor={corFundo}>
                <CardContainerButtonDelete aria-label={`Delete ${nome}`} onClick={onDelete}>
                    <CardContainerDeleteIcon src={Delete} alt="Delete icon" />
                </CardContainerButtonDelete>
                <CardContainerImg src={imageSrc} alt={`Imagem de ${nome}`} />
            </CardContainerBloco1>

            <CardContainerBloco2>
                <CardContainerNome>{nome}</CardContainerNome>
                <CardContainerCargo cor={corFundo}>{cargo}</CardContainerCargo>
            </CardContainerBloco2>
        </CardContainer>
    );
};

export default Card;
