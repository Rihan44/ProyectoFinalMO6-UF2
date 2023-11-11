// INDEX
let btn_repositorio = document.querySelector('.main__btn-repositorio');

if(btn_repositorio !== null){
    btn_repositorio.addEventListener('click', () => {
        window.open('https://github.com/Rihan44/ProyectoFinalMO6-UF2', '_blank');
    });
}

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

// ASTERISCOS

let numero_asteriscos = 0;
let input_asteriscos = document.querySelector('#input_asteriscos');
let form_asteriscos = document.querySelector('#form_asteriscos');
let contenedor_piramide = document.querySelector('#contenedor_piramide');
let btn_reset_asteriscos = document.querySelector('#btn_reset-asteriscos'); 

if(form_asteriscos !== null) {
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
}

if(btn_reset_asteriscos !== null){
    btn_reset_asteriscos.addEventListener('click', ()=>{
        location.reload();
    });
}

//  FONDO ALEATORIO
let fondo = document.querySelector('#fondo');
let btn_fondo_aleatorio = document.querySelector('#btn_fondo-aleatorio');
let btn_resetear_fondo = document.querySelector('#btn_reseteo-fondo');

if(btn_fondo_aleatorio !== null) {
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

let form_adivina = document.querySelector('#form_adivina');

if(form_adivina !== null) {
    let numero_aleatorio = parseInt(Math.random() * 10) + 1;

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
let form_par_impar = document.querySelector('#form_par-impar');

if(form_par_impar !== null){
    let main__par_impar = document.querySelector('.main__par-impar');
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


