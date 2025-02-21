export function getResposta(dado, numSelected) {
    if (
        (dado === 6 && numSelected >= 4) ||
        (dado === 12 && numSelected >=8) ||
        (dado === 20 && numSelected >= 12)
    ) {
        return 1;
    } else if (
        (dado === 6 && numSelected < 4) ||
        (dado === 12 && numSelected < 8) ||
        (dado === 20 && numSelected < 12)
    ) {
        return 2;
    }
    
};