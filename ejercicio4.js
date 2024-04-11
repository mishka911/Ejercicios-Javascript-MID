const materiasHtml = document.querySelector('.materias')

const materias = [
    {
        nombre: 'quimica',
        nota: 8
    },
    {
        nombre: 'fisica',
        nota: 6
    },
    {
        nombre: 'matematicas',
        nota: 9
    },
    {
        nombre: 'ingles',
        nota: 8
    },
    {
        nombre: 'programacion 2',
        nota: 10
    },
    {
        nombre: 'calculo',
        nota: 8
    }
]

const obtenerMateria = (id)=>{
    return new Promise((resolve, reject) =>{
        materia = materias [id]
        if (materia == undefined) reject ('La materia no existe')
        else setTimeout(() => {resolve(materia)}, Math.random()*1400)
    })
}

const devolverMaterias = async () =>{
    let materia = []
    for (var i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i)
        let newHTMLCode = `
        <div class="materia">
        <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
    </div>
        `
        materiasHtml.innerHTML += newHTMLCode           
    }
}

devolverMaterias() 