const sendButton = document.getElementById("snd-nota")

sendButton.addEventListener('click',()=>{
    let resultado, mensaje
    try {
       prevRes = parseInt(document.getElementById('nota').value) 
       if(isNaN(prevRes)){
        throw 'gracioso'
       }
       mensaje = definirMensaje(prevRes)
       resultado = verificarAprobacion(8,4,prevRes)
       
    } catch (e) {
        resultado = 'Ingresaste mal el dato'
        mensaje = 'Debes ingresar datos solamente numericos'
    }
    abrirModal(resultado,mensaje)
})

const definirMensaje = (pr)=>{
    let resultado
    switch (pr) {
        case 1: resultado= 'Se debe repesar la materia'
        break;
        case 2: resultado= 'Continua muy baja la nota, se necesita mas estudio'
        break;
        case 3: resultado= 'Estas muy por debajo del rango de notas'
        break;
        case 4: resultado= 'Un resultado aun por debajo del promedio'
        break;
        case 5: resultado= 'Estas en la media'
        break;
        case 6: resultado= 'Un poco mas de la media pero hay que mejorar'
        break;
        case 7: resultado= 'Vas por buen camino pero podemos dar mas'
        break;
        case 8: resultado= 'Buen resultado'
        break;
        case 9: resultado= 'Excelente!!'
        break;
        case 10: resultado= 'Perfecto!! felicitaciones!!'
        break;
    
        default: resultado= 'No se pudo determinar el resultado'
        break;
    }

    return resultado
}

const verificarAprobacion = (nota1, nota2, prevRes)=>{
    const promedio = (nota1 + nota2 + prevRes) / 3
    if(promedio >= 7){
        return ["<span class= 'green'>Aprobado</span>"]
    }
    return ["<span class= 'red'> Desaprobado</span>"]
}

const abrirModal = (res,msg)=>{
    document.querySelector('.resultado').innerHTML =res
    document.querySelector('.mensaje').innerHTML = 'Tu prueba fue: ' + msg
    let modal = document.querySelector('.background-modal')
    modal.style.animation = 'aparecer 1s forwards'
    modal.style.display = 'flex'
}