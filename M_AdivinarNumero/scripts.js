let num, n
let salir = false
let volver

do {
    //se ejecuta este código, al menos una vez
    let cont = 0
    //asignación de número aleatorio
    num = parseInt(Math.random() * 10) + 1

    do {
        //bucle de repetición del juego
        do {
            n = prompt("Adivina un número del 1 al 10")
            // document.write(n)
            //si se cancela , salir se reasigna a true
            if (n == null) {
                salir = true
            } else if (isNaN(n) || n < 0 || n > 10) {
                //validación de la entrada
                alert("Número no válido")
                volver = true
            }
        } while (salir == false && volver == true)
        //este bucle ha implicado no acertar
        cont++
        if (salir == false) {
            //dar pistas
            if (num > n) {
                alert("El número que buscas es mayor")
            } else if (num < n) {
                alert("El número que buscas es menor")
            }
        }
    }while(salir == false && n != num)
    //solo se puede salir si se acierta o se cancela
    if(salir == false){
        //mensaje de acierto
        alert("Acertaste! Intentos: " + cont)
        //se pide confirmación para jugar otra vez 
    }


} while (salir == false && confirm("¿Quieres jugar de nuevo?"))

if (salir){
    document.write("<h1> Se canceló la partida </h1>")
} else {
    document.write("<h1> Gracias por jugar </h1>")
}