// MENU DESPLEGABLE 
const btn_burger = document.querySelector('#burger_icon');
const btn_close = document.querySelector('#close_icon');
const nav_menu = document.querySelector('.header__menu')
const menu_mobile = document.querySelector('#menu_mobile');
const menu_pc = document.querySelector('#menu_pc');

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
let btn_fondo_aleatorio = document.querySelector('#btn_fondo-aleatorio');
let fondo = document.querySelector('#fondo');
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


