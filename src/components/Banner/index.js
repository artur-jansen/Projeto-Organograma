import React from "react";
import logoOrganize from "../../imagens/imgOrganize.png";
import tituloOrganize from "../../imagens/tituloOrganize.png";
import "../../index.css"
import "./banner.css"

const Banner = () => {
    return(
        <header className="containerBanner" >
            <div className="containerTitulo" >
                <img className="containerLogo" src={tituloOrganize} alt="Titulo do Organize" />
                <h3 className="subtitulo">Gerenciamento de Equipe</h3>
            </div>
            <div className="imagemTitulo">
                <img className="imagemLogo" src={logoOrganize} alt="Logo do Organize" />
            </div>
        </header>
    )
}

export default Banner;