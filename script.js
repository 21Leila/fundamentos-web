/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySeletor()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

.nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.createElement('#txtNome')
    if(nome.value.length <3) {
        alert('nome invalido')
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'

    }
function validaEmail() {

    let txtEmail = document.querySelector('#txtEmail')   
    
    if (email.value.indexOf('@')== -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'

    }

}
   function validaAssunto(){
       let txtAssunto = document.querySelector('#txtAssunto')
       if (assunto.value.length >= 2){
           txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
           txtAssunto.style.backgroundcolor = 'red'
       } else {
           txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
           txtAssunto.style.color = 'red'
           txtAssunto.style.display = 'none'
           assuntoOk = true
       }
   }

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar')
    }
}

}
function mapaZoom (){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}