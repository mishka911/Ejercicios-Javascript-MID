/*const nombre = document.getElementById('nombre')
const mail = document.getElementById('mail')
const materia = document.getElementById('materia')
const boton = document.getElementById('btn-enviar')
const resultado = document.querySelector(".resultado")

boton.addEventListener('click', (e)=>{
   e.preventDefault() //para prevenir que se actualice la pagina
    let error = validarCampos()
    if(error[0]){//true
        resultado.innerHTML= error[1]
        resultado.classList.add('red')
        resultado.classList.remove('green')
    } else{
        resultado.innerHTML = 'Solicitud envidada correctamente'
        resultado.classList.add('green')
        resultado.classList.remove('red')
    }
})

const validarCampos = ()=>{
    let error = []
    if(nombre.value.length < 5){
        error[0] = true
        error[1] = 'El nombre no contener menos de 5 caracteres'
        return error
    } else if (nombre.value.length > 40) {
        error[0] = true
        error[1] = 'El nombre no contener mas de 40 caracteres' 
        return error
    } else if (mail.value.length < 5 || 
               mail.value.length > 40 ||
               mail.value.indexOf('@') == -1 ||
               mail.value.indexOf('.') == -1 ) {
        error [0] = true
        error [1] = 'El mail no es valido'
        return error
    } else if(materia.value < 4 || materia.value >40){
        error[0] = true
        error[1] = 'La materia no existe'
        return error
    }



    error[0] = false
    return error
}*/

let alumnos = [{
    nombre: 'Vanessa Proaño',
    email: 'vaneproano91@gmail.com',
    materia: 'Quimica'
},{
    nombre: 'Juan Pablo Lopez',
    email: 'gringa@gmail.com',
    materia: 'Fisica'
},{
    nombre: 'Franco Zabala',
    email: 'frankzoba@gmail.com',
    materia: 'Arte'
},{
    nombre: 'Adan Suarez',
    email: 'roncomexico@gmail.com',
    materia: 'Front-end'
},{
    nombre: 'Coffla',
    email: 'coffla990@gmail.com',
    materia: 'Calculo 2'
}]

const boton = document.querySelector('.boton-confirmar')
const contenedor = document.querySelector('.grid-container')

for(alumno in alumnos){
    let datos = alumnos[alumno]
    let nombre = datos['nombre']
    let email = datos['email']
    let materia = datos['materia']
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
       <select class="semana-elegida">
           <option value="Semana 1">Semana 1</option>
           <option value="Semana 2">Semana 2</option>
       </select>
    </div>
    ` 
    contenedor.innerHTML += htmlCode
}

boton.addEventListener('click', ()=>{
let confirmar = confirm('Estas seguro de enviar estos datos?')
if (confirmar){
    document.body.removeChild(boton)//quitar el boton despues de confirmar
    let elementos = document.querySelectorAll('.semana') 
    let semanasElegidas = document.querySelectorAll('.semana-elegida')
    for(elemento in elementos){
     semana = elementos[elemento]
     semana.innerHTML = semanasElegidas[elemento].value
    }
}

})

