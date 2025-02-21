import dados from "../imgs/lista.imagens";

export function getImage(num) {
    if (num === 20) {
        return dados.d20;
    } else if(num === 12) {
        return dados.d12;
    } else{
        return dados.d6
    };
};