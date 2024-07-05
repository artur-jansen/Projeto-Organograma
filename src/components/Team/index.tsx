import React from "react";
import styled from "styled-components";
import Barrinha from "../Bar/index.tsx";
import Card from "../Card/index.tsx";
import TituloPrincipal from "../TitlePrincipal/index.tsx";

const TimeContainer = styled.section``;

const TituloContainer = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const TituloTime = styled.h3`
    font-size: 1.8rem;
    margin: 0;
`;

const Colaboradores = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 32px;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Team = ({ corSecundaria, nome, corPrimaria, colaboradores, onDelete }) => {
    return (
        colaboradores.length > 0 && (
            <TimeContainer>
                <TituloPrincipal/>
                <TituloContainer style={{ backgroundColor: corSecundaria }}>
                    <TituloTime>{nome}</TituloTime>
                    <Barrinha largura="50px" altura="4px" cor={corPrimaria}/>
                    <Colaboradores>
                        {colaboradores.map(colaborador => (
                            <Card 
                                key={colaborador.nome}
                                corFundo={corPrimaria}
                                nome={colaborador.nome}
                                cargo={colaborador.cargo}
                                imagem={colaborador.imagem}
                                onDelete={() => onDelete(colaborador.nome)}
                            />
                        ))}
                    </Colaboradores>
                </TituloContainer>
            </TimeContainer>
        )
    );
}

export default Team;
