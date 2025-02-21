export function getNumberRolled(dado) {
    if (dado === 20) {
        return Math.floor(Math.random() * 20) + 1;
    } else if(dado === 12) {
        return Math.floor(Math.random() * 12) + 1;
    } else if(dado === 6) {
        return Math.floor(Math.random() * 6) + 1;
    }else{
        alert("Selecione um dado");
    };
  };