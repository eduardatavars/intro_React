import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuError, setDeuError] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setDeuError(false);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then( res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                if (resJson.message === "Not Found") {
                    setDeuError(true); //se o user não existir, ativa o erro
                    setRepos([]); //limpa o repositório
                } else {
                    setRepos(resJson);
                }
            }, 2000);
            
        })
        .catch(() => {
            setDeuError(true); //ativa o erro em caso de falha na requisição
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : deuError ? (
                <h1>Usuário não existe! Tente novamente.</h1> //mensagem de erro
            ) : (
                <ul className={styles.list}>
                    {/* {repos.map(({id, name, language, html_url}) => (
                        <li key={id}>
                            <b>Nome:</b> {name} <br />
                            <b>Linguagem:</b> {language} <br />
                            <a target="_blank" href={html_url}>Visitar no Github</a> <br />
                        </li>
                        ))} */}
                    {repos.map(repositorio => (
                        <li className={styles.listItem} key={repositorio.id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b>
                                {repositorio.name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> 
                                {repositorio.language}
                            </div> 
                            <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;