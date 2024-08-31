import React from "react";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Secao from "./Secao";
import Cartao from "./Cartao";
import Titulo from "./Titulo";
import Formulario from "./Formulario";

import "./Principal.css";

import { collection, getDocs } from "firebase/firestore";
import db from "../database/firebaseConfig";

const Principal = () => {
  //Busca todos os documentos da coleção "comentarios"
  //e lista no console cada um dos documentos salvos
  const lerBanco = async () => {
    const comentarios = await getDocs(collection(db, "comentarios"));
    comentarios.forEach((documento) => {
      console.log(documento.data());
    });
  };

  const campos = [
    //VETOR de OBJETOS
    {
      //Começa o Objeto
      nome: "Nome completo",
      id: "nome",
      tipo: "text",
    }, //Fim do OBJETO
    {
      nome: "Email Válido",
      id: "email",
      tipo: "email",
    },
    {
      nome: "Cidade",
      id: "cidade",
      tipo: "text",
    },
    {
      nome: "Estado",
      id: "estado",
      tipo: "text",
    },
    {
      nome: "Telefone de Contato",
      id: "fone",
      tipo: "text",
    },
    {
      nome: "Deixe seu recado",
      id: "recado",
      tipo: "text",
    },
  ];

  return (
    <div>
      <Cabecalho />
      <Menu />
      <Secao>
        <img src="src/assets/topo.jpg"></img>
      </Secao>

      <Secao>
        <Titulo texto="Serviços" />
        <Cartao
          descricao="Um texto descritivo"
          imagem="#"
          titulo="Um LOGO BEM GRANDE"
        />
        <Cartao descricao="LOREN IPSUN" imagem="#" titulo="Um TITULO" />
      </Secao>

      <Secao>
        <Titulo texto="Contato" />

        <Formulario campos={campos} bancoDeDados={"comentarios"} />
        <button onClick={lerBanco}>Ler dados do Banco</button>
      </Secao>
    </div>
  );
};
export default Principal;
