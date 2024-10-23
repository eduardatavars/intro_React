import Perfil from "./components/Perfil";
import Formulario from "./components/Perfil/Formulario";

function App() {
  // const nome = "Maria"

  // function retornaNome(){
  //   return nome;
  // }

  // const pessoa = {
  //   nome: "Love"
  // }

  // let estaDeDia = false;

  return(
    <>
      <Perfil nome="Maria Tavares" endereco="https://github.com/eduardatavars.png" />
      {/* <h1>Olá, {retornaNome()}</h1>
      <h1>Olá, {pessoa.nome}</h1>
      <h2>Subtitulo</h2>
      {estaDeDia ? 'Bom dia!' : 'Boa tarde!'} */}
      <Formulario />
    </>
  )
}

export default App
