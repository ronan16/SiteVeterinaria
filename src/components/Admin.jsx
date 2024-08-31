import React from "react";
import Secao from "./Secao";
import Titulo from "./Titulo";
import Formulario from "./Formulario";

import { collection, getDocs } from "firebase/firestore";
import db from "../database/firebaseConfig";

function Admin() {
  const camposDoServico = [
    //VETOR de OBJETOS
    {
      //Começa o Objeto
      nome: "Titulo",
      id: "titulo",
      tipo: "text",
    },
    {
      //Começa o Objeto
      nome: "Descrição",
      id: "decricao",
      tipo: "text",
    },
    {
      //Começa o Objeto
      nome: "Imagem",
      id: "imagem",
      tipo: "text",
    },
  ];

  const lerBanco = async () => {
    const comentarios = await getDocs(collection(db, "servicos"));
    comentarios.forEach((documento) => {
      console.log(documento.data());
    });
  };
  return (
    <div>
      <Secao>
        <Titulo texto="Cadastro de serviços" />

        <Formulario campos={camposDoServico} bancoDeDados={"servicos"} />
        <button onClick={lerBanco}>Ler dados do Banco</button>
      </Secao>
    </div>
  );
}

export default Admin;
