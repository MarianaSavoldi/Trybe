let peca = "CaVaLo";

switch (peca.toLowerCase()) {
    case "peão":
        console.log("Anda somente para frente, mas captura peças nas diagonais");
        break;

    case "torre":
        console.log("Anda em linhas e colunas");
        break;

    case "cavalo":
        console.log("Anda em L")
        break;

    case "bispo":
        console.log("Anda somente nas diagonais");
        break;

    case "rei":
        console.log("Anda em todas as direções de uma em uma casa");
        break;

    case "rainha":
        console.log("Anda em todas as direções");
        break;
    
    default:
        console.log("Não tem essa peça");
}