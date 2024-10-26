import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  // const nome = "Maria"

  // function retornaNome(){
  //   return nome;
  // }

  // const pessoa = {
  //   nome: "Love"
  // }

  // let estaDeDia = false;
  const [formularioVisivel, setFormularioVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* <h1>Olá, {retornaNome()}</h1>
      <h1>Olá, {pessoa.nome}</h1>
      <h2>Subtitulo</h2>
      {estaDeDia ? 'Bom dia!' : 'Boa tarde!'} */}
      {/* {formularioVisivel && (
        <Formulario/>
        )}
      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
