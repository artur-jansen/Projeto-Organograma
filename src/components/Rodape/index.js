import React from "react";
import Facebook from "../../imagens/fb.png";
import Instagram from "../../imagens/ig.png";
import Twitter from "../../imagens/tw.png";
import tituloOrganize from "../../imagens/tituloOrganize.png";
import "./rodape.css"

const Rodape = () => {
    return(
        <footer className="rodapeContainer">
            <div className="redesSociais">
                <img className="icon" src={Facebook} alt="icon facebook" />
                <img className="icon" src={Instagram} alt="icon instragram" />
                <img className="icon" src={Twitter} alt="icon twitter" />
            </div>
            <img className="logoOrganize" src={tituloOrganize} alt="logo organize" />
            <h3>Desenvolvido por Artur</h3>
        </footer>
    )
}

export default Rodape;