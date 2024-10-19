import './perfil.css'

const Perfil = () => {
    const usuario = {
        nome: 'Maria Tavares',
        avatar: 'https://github.com/eduardatavars.png'
    }

    return (
        <div>
            <img className='perfil-avatar' src={usuario.avatar} alt="Foto de perfil" />
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </div>
    )
}

export default Perfil;