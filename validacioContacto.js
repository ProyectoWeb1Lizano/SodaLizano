document.getElementById("formContacto").addEventListener("submit", function(e){
    e.preventDefault();

    let valido = true;

    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos")
    let correo = document.getElementById("correo");
    let telefono = document.getElementById("telefono");
    let motivo = document.getElementById("motivo");
    let mensaje = document.getElementById("mensaje");
    let politica = document.getElementById("politica");


    document.querySelectorAll("input, select, textarea")
        .forEach(c => c.classList.remove("error"));


   let patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s-]{2,}$/;
    if(!patronNombre.test(nombre.value.trim())){
        nombre.classList.add("error");
        nombre.focus();
        return;
    }

    if(!patronNombre.test(apellidos.value.trim())){
        apellidos.classList.add("error");
        apellidos.focus();
    return;
    }

    let patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!patronCorreo.test(correo.value.trim())){
        correo.classList.add("error");
        correo.focus();
        valido = false;
        return;
    }
    

    let patron = /^[0-9]{8}$/;
    if(!patron.test(telefono.value)){
        telefono.classList.add("error");
        telefono.focus();
        valido = false;
        return;
    }

    if(motivo.value === ""){
        motivo.classList.add("error");
        motivo.focus();
        valido = false;
        return;
    }

    if(mensaje.value.trim() === ""){
        mensaje.classList.add("error");
        mensaje.focus();
        valido = false;
        return;
    }

    if(!politica.checked){
        politica.classList.add("error"); 
        politica.focus();
        valido = false;
        alert("Debe aceptar la política de privacidad");
        return;
    }

    // si todo esta bien, se envia 
    if(valido){
        this.submit();
    }
});