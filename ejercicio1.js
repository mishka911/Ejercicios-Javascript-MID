/*let alto = window.screen.availHeight
let ancho = window.screen.availWidth

comprar = confirm(`el alto de la pantalla es: ${alto}
el ancho de la pantalla es: ${ancho}`)

if (comprar){
    alert('compra exitosa')
}else{
    alert('compra cancelada')
}*/

let href = window.location.href
let pathname = window.location.pathname
let hostname = window.location.hostname
let protocol = window.location.protocol

let html = `Protocol: ${protocol} <br>`
html += `hostname: ${hostname} <br>`
html += `pathname: ${pathname} <br>`
html += `URL: ${href} <br>`

document.write(html)
