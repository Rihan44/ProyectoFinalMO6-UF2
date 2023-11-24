
// MENU DESPLEGABLE 
let btn_burger = document.querySelector('#burger_icon');
let btn_close = document.querySelector('#close_icon');
let nav_menu = document.querySelector('.header__menu')
let menu_mobile = document.querySelector('#menu_mobile');
let menu_pc = document.querySelector('#menu_pc');

btn_burger.addEventListener('click', () =>{
    btn_close.style.display = 'block';
    btn_burger.style.display = 'none';
    nav_menu.style.height = '220px';
    menu_mobile.style.top = '75px';
});

btn_close.addEventListener('click', () => {
    btn_burger.style.display = 'block';
    btn_close.style.display = 'none';
    nav_menu.style.height = '0px';
    menu_mobile.style.top = '-120px';
});

// INDEX
let btn_repositorio = document.querySelector('.main__btn-repositorio');

if(btn_repositorio !== null){
    btn_repositorio.addEventListener('click', () => {
        window.open('https://github.com/Rihan44/ProyectoFinalMO6-UF2', '_blank');
    });
}

// ASTERISCOS
let main_asteriscos = document.querySelector('.main__asteriscos');

if(main_asteriscos !== null) {
    let numero_asteriscos = 0;
    let input_asteriscos = document.querySelector('#input_asteriscos');
    let form_asteriscos = document.querySelector('#form_asteriscos');
    let contenedor_piramide = document.querySelector('#contenedor_piramide');
    let btn_reset_asteriscos = document.querySelector('#btn_reset-asteriscos'); 

    form_asteriscos.addEventListener('submit', (e) => {
        e.preventDefault();
        btn_reset_asteriscos.style.display = 'block';
        contenedor_piramide.style.height = '380px';
        do {
            numero_asteriscos = parseInt(input_asteriscos.value);
        } while (isNaN(numero_asteriscos || numero_asteriscos <= 0))
        
        for (let i = 1; i <= numero_asteriscos; i++) {
            for (let j = 1; j <= i; j++) {
                contenedor_piramide.innerHTML += "* ";
            }
            contenedor_piramide.innerHTML += "<br>";
        }
    });

    if(btn_reset_asteriscos !== null){
        btn_reset_asteriscos.addEventListener('click', ()=>{
            location.reload();
        });
    }
}

//  FONDO ALEATORIO
let main_fondo = document.querySelector('.main__fondo');

if(main_fondo !== null) {
    let fondo = document.querySelector('#fondo');
    let btn_fondo_aleatorio = document.querySelector('#btn_fondo-aleatorio');
    let btn_resetear_fondo = document.querySelector('#btn_reseteo-fondo');

    btn_fondo_aleatorio.addEventListener('click', () => {
        let red = parseInt(Math.random()*255);
        let green = parseInt(Math.random()*255);
        let blue = parseInt(Math.random()*255);
        btn_resetear_fondo.style.display = 'block';
        fondo.style.height = '415px';

        fondo.style.backgroundColor = `rgb(${red},${green},${blue})`;
    });

    btn_resetear_fondo.addEventListener('click', () => {
        location.reload();
    });
}

// ADIVINAR NUMERO
let main_adivina = document.querySelector('.main__adivina');

if(main_adivina  !== null) {
    let numero_aleatorio = parseInt(Math.random() * 10) + 1;
    let form_adivina = document.querySelector('#form_adivina');

    form_adivina.addEventListener('submit', (e) => {
        e.preventDefault();
        let input_adivina = document.querySelector('#input_adivina');
        let parrafo_pista = document.querySelector('#adivina-numero_pista');
        let btn_jugar_nuevo = document.querySelector('#btn_jugar-nuevo');
        
        if(numero_aleatorio > input_adivina.value) {
            parrafo_pista.innerHTML = 'Mas mayor';
        } else if(numero_aleatorio < input_adivina.value) {
            parrafo_pista.innerHTML = 'Mas pequeño';
        } else if (numero_aleatorio == input_adivina.value) {
            parrafo_pista.innerHTML = 'ENHORABUENA, HAS GANADO!, QUIERES JUGAR DE NUEVO?';
            btn_jugar_nuevo.style.display = 'block';

            btn_jugar_nuevo.addEventListener('click', () => {
                location.reload();
            });
        }
    });
}

// PAR / IMPAR
let main__par_impar = document.querySelector('.main__par-impar');

if(main__par_impar !== null){
    let form_par_impar = document.querySelector('#form_par-impar');
    let input_par_impar = document.querySelector('#input_par-impar'); 
    let parrafo_par_impar = document.createElement('p');
    parrafo_par_impar.classList.add('parrafo__par-impar');
    main__par_impar.appendChild(parrafo_par_impar);

    form_par_impar.addEventListener('submit', (e) => {
        e.preventDefault();

        if(input_par_impar.value % 2 === 0) {
            parrafo_par_impar.innerText = `El número ${input_par_impar.value} es par`;
        } else {
            parrafo_par_impar.innerText = `El número ${input_par_impar.value} es impar`;
        }
    })
}

// PALETA DE COLORES
let main_colores = document.querySelector('.main__colores');

if(main_colores !== null) {
    const num_botones = 192;

    let contenedor_paleta = document.querySelector('#contendor_paleta');
    let btn_reset_colores = document.querySelector('#btn_reset_colores');
    let parrafo_color = document.querySelector('#parrafo_color');

    for(let i = 0; i < num_botones; i++) {
        let red = parseInt(Math.random()*255);
        let green = parseInt(Math.random()*255);
        let blue = parseInt(Math.random()*255);
        let boton_paleta = document.createElement('button');

        boton_paleta.style.backgroundColor = `rgb(${red},${green},${blue})`;
        contenedor_paleta.appendChild(boton_paleta);

        boton_paleta.addEventListener('click', () => {
            parrafo_color.style.color = boton_paleta.style.backgroundColor;
        })
    }

    btn_reset_colores.addEventListener('click', () => {
        location.reload();
    });
}

/* fibonacci */
let main_fibonacci = document.querySelector('.main__fibonacci');

if(main_fibonacci !== null) {
    let form_fibonacci = document.querySelector('#form_fibonacci');
    let input_fibonacci = document.querySelector('#input_fibonacci');
    let contenedor_fibonacci = document.querySelector('#contenedor_fibonacci');
    let btn_reset_fibonacci = document.querySelector('#btn_reset-fibonacci'); 

    form_fibonacci.addEventListener('submit', (e) => {
        e.preventDefault();
        
        btn_reset_fibonacci.style.display = 'block';
        contenedor_fibonacci.style.height = '380px';

        function fibonacci(numero) {
            let fib_array = [0, 1];
          
            for (let i = 2; i < numero; i++) {
              var next_fib = fib_array[i - 1] + fib_array[i - 2];
              fib_array.push(next_fib);
            }
          
            return fib_array;
          }
          
          let resultado = fibonacci(input_fibonacci.value);

          resultado.forEach((num, index) => {
            contenedor_fibonacci.innerHTML += "<br>";
            contenedor_fibonacci.innerHTML += `${index}: ${num}`;
          })
    });

    if(btn_reset_fibonacci !== null){
        btn_reset_fibonacci.addEventListener('click', ()=>{
            location.reload();
        });
    }
}

