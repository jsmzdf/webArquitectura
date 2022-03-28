function metodo() {

    var letras = ["W", "A", "W", "T", "L", "W", "N"];
    var n = letras.length;
    var izq = 0;
    var der = 0;
    var aux = 0;
    var salida = "";
    for (var i = 0; i < n; i++) {
        if (aux > n)
            break;
        der = aux + 1;
        while (der >= izq) {
            if (der == izq) {
                salida += letras[aux];
                aux = aux + izq;
            }
            der--;
        }
        izq++;
    }
    return salida;
}
console.log(metodo());