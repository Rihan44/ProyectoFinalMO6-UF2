let n

do {
    n = prompt("Escribe el número de asteriscos para empezar la pirámide (debe ser positivo y entero)")
} while (isNaN(Number(n) || n <= 0))

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("* ")
    }
    document.write("<br>")

}