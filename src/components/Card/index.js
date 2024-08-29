import './colaborador.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const Favorito = {
        size: 25,
        cursor: 'pointer',
        onClick: favoritar
    }

    return (<div className="colaborador">
        <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito ? <AiFillHeart {...Favorito} color='#ff0000' /> : <AiOutlineHeart {...Favorito} />}
            </div>
        </div>
    </div>)
}

export default Colaborador