let porcentagem = 39;

switch (porcentagem) {
    case (porcentagem >= 90):
        console.log("A");
        break;

    case (porcentagem >= 80):
        console.log("B");
        break;

    case (porcentagem >= 70):
        console.log("C");
        break;

    case (porcentagem >= 60):
        console.log("D");
        break;

    case (porcentagem >= 50):
        console.log("E");
        break;

    case (porcentagem < 50):
        console.log("F");
        break;

    default:
        console.log("Nota FALSA")
}