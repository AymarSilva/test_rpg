import { getResposta } from "./getResposta.backend";

export async function fetchMessage(dado, numSelected) {
    const idMensagem = getResposta(dado, numSelected);
    console.log(idMensagem)
    try {
      console.log(process)
        const request = await fetch(`http://localhost:5000/roll/${idMensagem}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const resposta = await request.json();
        console.log(resposta);
        return resposta.mensagem;
      } catch (error) {
        console.log(error);
      };
};