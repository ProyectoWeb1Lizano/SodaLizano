document.getElementById("formTrabaja").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let cedula = document.getElementById("cedula");
    let nacimiento = document.getElementById("nacimiento");
    let correo = document.getElementById("correo");
    let telefono = document.getElementById("telefono");
    let puesto = document.getElementById("puesto");
    let disponibilidad = document.getElementById("disponibilidad");
    let experiencia = document.getElementById("experiencia");
    let cv = document.getElementById("cv");
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

    let patronCedula = /^[0-9]-[0-9]{4}-[0-9]{4}$/;
    if(!patronCedula.test(cedula.value.trim())){
        cedula.classList.add("error");
        cedula.focus();
        return;
    }

    if(nacimiento.value === ""){
        nacimiento.classList.add("error");
        nacimiento.focus();
        return;
    }

    let patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!patronCorreo.test(correo.value.trim())){
        correo.classList.add("error");
        correo.focus();
        return;
    }

    let patronTel = /^[0-9]{8}$/;
    if(!patronTel.test(telefono.value)){
        telefono.classList.add("error");
        telefono.focus();
        return;
    }

    // selects obligatorios
    if(puesto.value === ""){
        puesto.classList.add("error");
        puesto.focus();
        return;
    }

    if(disponibilidad.value === ""){
        disponibilidad.classList.add("error");
        disponibilidad.focus();
        return;
    }

    
    if(experiencia.value.trim() === ""){
        experiencia.classList.add("error");
        experiencia.focus();
        return;
    }


    if(cv.files.length === 0){
        cv.classList.add("error");
        alert("Debe adjuntar su currículum");
        return;
    }

    let archivo = cv.files[0];

    let tiposValidos = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if(!tiposValidos.includes(archivo.type)){
        cv.classList.add("error");
        alert("Solo se permiten PDF o Word");
        return;
    }

    if(archivo.size > 2 * 1024 * 1024){
        cv.classList.add("error");
        alert("El archivo es muy grande (máx 2MB)");
        return;
    }


    if(!politica.checked){
        politica.classList.add("error");
        politica.focus();
        alert("Debe aceptar la política");
        return;
    }

    // enviar
    this.submit();
});