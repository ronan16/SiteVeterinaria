import "./Formulario.css";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../database/firebaseConfig";

//
function Formulario({ campos, bancoDeDados }) {
  const [dados, setDados] = useState({});

  const salvarDados = async (e) => {
    e.preventDefault(); //prevenindo o evento padrão
    console.log(dados);
    const docRef = await addDoc(collection(db, bancoDeDados), dados);
  };
  const alteraDados = (e) => {
    const valor = e.target.value;
    const chave = e.target.id;
    setDados({ ...dados, [chave]: valor });
  };
  //evento = e = submit

  return (
    <form id="form_contato" onSubmit={salvarDados}>
      {campos.map((item) => {
        return (
          <div className="contato">
            <label htmlFor={item.id}>{item.nome}</label>
            <input
              id={item.id}
              type={item.tipo}
              value={dados[item.id]}
              onChange={alteraDados}
            />
          </div>
        );
      })}
      <button type="submit"> Enviar informação</button>
    </form>
  );
} //Fim do Componente Formulario

export default Formulario;
