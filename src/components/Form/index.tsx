import React, { useState } from "react";
import TextField from "../TextField/index.tsx";
import styled from "styled-components";
import List from "../DropDownList/index.tsx";
import Botao from "../ButtonForm/index.tsx";

const FormContainer = styled.section`
    display: flex;
    justify-content: center;
    margin: 5rem 0;
`

const CampoForm = styled.form`
    max-width: 80%;  
    background-color: #F5EFEF;
    box-shadow: 10px 10px 19px rgba(0, 0, 0, 0.19);
    padding: 2rem 4rem;
    border-radius: 16px;
`

const TituloForm = styled.h2`

`

const Form = ({ registerEmployee, times }) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const saveForm = (evento) => {
        evento.preventDefault();
        registerEmployee({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return(
        <FormContainer>
            <CampoForm onSubmit={saveForm}>
                <TituloForm>Preencha os dados para criar o card do colaborador</TituloForm>
                <TextField valor={nome} changeValue={setNome} type="text" label="Nome" placeholder="Insira seu nome" obrigatorio={true}/>
                <TextField valor={cargo} changeValue={setCargo} type="text" label="Cargo" placeholder="Insira seu cargo" obrigatorio={true}/>
                <TextField valor={imagem} changeValue={setImagem} type="text" label="Imagem" placeholder="Insira o endereço da imagem" obrigatorio={false}/>
                <List valor={time} changeValue={setTime} label="Times" itens={times} obrigatorio={true}/>
                <Botao>Criar Card</Botao>
            </CampoForm>
        </FormContainer>
    );
}

export default Form;
