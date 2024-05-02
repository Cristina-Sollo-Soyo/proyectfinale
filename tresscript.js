let isOpen = false; //esto nos dice si esta abierto o cerrado el menu. aqui de normal esta cerrado
function handlerEvents(){

    let boton = document.getElementById('botonMenu'); //tomamos el boton por la id
    boton.addEventListener('click', handlerMenu) //esto es cuando hagas click ejecuta esta funcion
    }

    function handlerMenu(){

       let lista = document.getElementById('lista'); //tomamos la lista entera

       let icono = document.getElementById('iconoBoton');//tomamos  el boton

       if (isOpen == false) {

        lista.style.display = 'block'; //aqui le digo cuando este diferente a cerrado lo abrimos y ponemos la x

        icono.className = 'fa-solid fa-xmark';

        isOpen = true;

       } else {

        lista.style.display = ''; //y aqui cuando vuelva a su estado inicial se cierra y vuelve a la burguer

        icono.className = 'fa-solid fa-bars';

        isOpen = false;
       }

    }


window.onload = handlerEvents; //cuando cargue la caja maneja los eventos