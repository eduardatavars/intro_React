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

  return(
    <>
      <Perfil nome="Maria Tavares" endereco="https://github.com/eduardatavars.png" />
      <ReposList />
      {/* <h1>Olá, {retornaNome()}</h1>
      <h1>Olá, {pessoa.nome}</h1>
      <h2>Subtitulo</h2>
      {estaDeDia ? 'Bom dia!' : 'Boa tarde!'} */}
      {formularioVisivel && (
        <Formulario/>
        )}
      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">toggle form</button>
    </>
  )
}

export default App
