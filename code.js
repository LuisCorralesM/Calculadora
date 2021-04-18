let screen = document.querySelector('#screen-result');

function getData(ref){
    let value = ref.value;
    screen.value += value;
}

function clean(){
    screen.value = '';
}

function calculate(){
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
        setTimeout(() => {
            clean();
        }, 1000);
    }
}

let body = document.getElementById('BODY');
 
const print = function(){
    nombreTecla = event.keyCode;
    console.log(nombreTecla)
    // numeros
    if(nombreTecla === 48){
        screen.value += 0;
    } else if(nombreTecla === 49){
        screen.value += 1;
    } else if(nombreTecla === 50){
        screen.value += 2;
    } else if(nombreTecla === 51){
        screen.value += 3;
    } else if(nombreTecla === 52){
        screen.value += 4;
    } else if(nombreTecla === 53){
        screen.value += 5;
    } else if(nombreTecla === 54){
        screen.value += 6;
    } else if(nombreTecla === 55){
        screen.value += 7;
    } else if(nombreTecla === 56){
        screen.value += 8;
    } else if(nombreTecla === 57){
        screen.value += 9;
    } 
    // signos
    else if(nombreTecla === 43){
        screen.value += "+"
    } else if(nombreTecla === 45){
        screen.value += "-"
    } else if(nombreTecla === 42){
        screen.value += "*"
    } else if(nombreTecla === 47){
        screen.value += "/"
    }
    // enter
    else if(nombreTecla === 13){
        calculate();
    }
    // borrar
    else if(nombreTecla === 127){
        clean();
    } else{
        alert(error);
    }
}

body.addEventListener('keypress', print);

// Estilos---------------------------------------

let btnColor = document.getElementsByClassName('btn-color');
let contenedorFondo = document.getElementById('contenedor-fondo');

// Contorno ------------

const colorContorno = function(){
    let Contorno = document.getElementById('contorno')
    let color = Contorno.value;

    if(color == 0){
        for(i=0; i<=btnColor.length; i++){
            console.log('btn-blue')
            btnColor[i].style.borderColor="white";
            btnColor[i].style.borderWidth="3px";
            btnColor[i].style.borderStyle="solid";
        }
    }else if(color == 1){
        for(i=0; i<=btnColor.length; i++){
            console.log('btn-blue')
            btnColor[i].style.borderColor="#47f";
            btnColor[i].style.borderWidth="3px";
            btnColor[i].style.borderStyle="solid";
        }
    }else if(color == 2){
        for(i=0; i<=btnColor.length; i++){
            console.log('btn-blue')
            btnColor[i].style.borderColor="red";
            btnColor[i].style.borderWidth="3px";
            btnColor[i].style.borderStyle="solid";

        }
    }else if(color == 3){
        for(i=0; i<=btnColor.length; i++){
            console.log('btn-blue')
            btnColor[i].style.borderColor="black";
            btnColor[i].style.borderWidth="3px";
            btnColor[i].style.borderStyle="solid";

        }
    }else if(color == 4){
        for(i=0; i<=btnColor.length; i++){
            console.log('btn-blue')
            btnColor[i].style.borderColor="violet";
            btnColor[i].style.borderWidth="3px";
            btnColor[i].style.borderStyle="solid";

        }
    }else if(color == 5){
        for(i=0; i<=btnColor.length; i++){
            console.log('btn-blue')
            btnColor[i].style.borderColor="blue";
            btnColor[i].style.borderWidth="3px";
            btnColor[i].style.borderStyle="solid";

        }
    }

};

// Botones ------------

const colorbtns = function(){
    let botones = document.getElementById('botones')
    let color = botones.value;

    if(color == 0){
        for(i=0; i<=btnColor.length; i++){
            console.log('btn-blue')
            btnColor[i].style.background="white"
        }
    }else if(color == 1){
        for(i=0; i<=btnColor.length; i++){
            console.log('btn-blue')
            btnColor[i].style.background="#47f"
        }
    }else if(color == 2){
        for(i=0; i<=btnColor.length; i++){
            console.log('btn-blue')
            btnColor[i].style.background="red"
        }
    }else if(color == 3){
        for(i=0; i<=btnColor.length; i++){
            console.log('btn-blue')
            btnColor[i].style.background="black"
        }
    }else if(color == 4){
        for(i=0; i<=btnColor.length; i++){
            console.log('btn-blue')
            btnColor[i].style.background="violet"
        }
    }else if(color == 5){
        for(i=0; i<=btnColor.length; i++){
            console.log('btn-blue')
            btnColor[i].style.background="blue"
        }
    }

};


// Letra --------------

const colorLetra = function(){
    let letra = document.getElementById('letra')
    let colorLetra = letra.value;

    if(colorLetra == 0){
        for(i=0; i<=btnColor.length; i++){
            btnColor[i].style.color="white"
        }
    }else if(colorLetra == 1){
        for(i=0; i<=btnColor.length; i++){
            btnColor[i].style.color="#47f"
        }
    }else if(colorLetra == 2){
        for(i=0; i<=btnColor.length; i++){
            btnColor[i].style.color="red"
        }
    }else if(colorLetra == 3){
        for(i=0; i<=btnColor.length; i++){
            btnColor[i].style.color="black"
        }
    }else if(colorLetra == 4){
        for(i=0; i<=btnColor.length; i++){
            btnColor[i].style.color="violet"
        }
    }else if(colorLetra == 5){
        for(i=0; i<=btnColor.length; i++){
            btnColor[i].style.color="blue"
        }
    }else{
        alert('ups, algo salio mal')
    }

}

// Fondo -------------


const colorFondo = function(){
    let fondo = document.getElementById('fondo')
    let color = fondo.value;

    if(color == 0){
            contenedorFondo.style.background="white"
    }else if(color == 1){
            contenedorFondo.style.background="#47f"
    }else if(color == 2){
            contenedorFondo.style.background="red"
    }else if(color == 3){
            contenedorFondo.style.background="black"        
    }else if(color == 4){      
            contenedorFondo.style.background="violet"
    }else if(color == 5){
            contenedorFondo.style.background="blue"
    }else{
        alert('ups, algo salio mal')
    }

}