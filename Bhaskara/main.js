var startbutton = document.querySelector ("#Iniciar")

startbutton.addEventListener ("click", () => {
    iniciar()
})

var telacalculo = document.getElementById ("calc")
var telainiciar = document.getElementById ("tela")

function iniciar() {
    var send = document.getElementById ("Enviar")

    send.style.display = 'block'
    telacalculo.style.display = 'flex'
    telainiciar.style.display = 'none'
}

var button = document.querySelector ("#Enviar");

button.addEventListener("click", () => {
    calcular()
} )

var inputs = document.querySelectorAll("[name = 'Valores']")

function calcular(){
    
    var valores = {
        A : inputs[0].value,
        B : inputs[1].value,
        C : inputs[2].value
    }
    
    var ndelta = "Não existem raízes!"
    var delta = (Math.pow(valores.B,2) - 4 * valores.A * valores.C)
    var X1 = "O valor de X1 é: " + ((-valores.B + Math.sqrt(delta)) / (2 * valores.A))
    var X2 = "O valor de X2 é: " + ((-valores.B - Math.sqrt(delta)) / (2 * valores.A))

    if (valores.A == 0){
        console.log ("O A não pode ser igual a 0!")
        imprimir(null,null,true,true)
        return
    } 
    if (delta < 0) {
        console.log (ndelta)
        imprimir(null,null,false)
    }
    if (delta >= 0) {
        console.log (X1)
        console.log (X2)
        imprimir(X1,X2)
    }
}

function imprimir(X1 = 0,X2 = 0,temRaiz = true,A_0 = false){
    var h2 = document.querySelector(".resultados h2")
    var divh2 = document.querySelector(".resultados")
    divh2.style.display = "block"
    
    if(!temRaiz){
        h2.textContent = "Não existem raízes! Delta negativo"
        return
    }
    if(A_0){
        h2.textContent = "Não é uma equação de segundo grau! O valor de A deve ser diferente de 0"
        return
    }

    h2.textContent = X1 + " " + X2 + " "

    }

var returnbutton = document.querySelector ("#returnbutton")

returnbutton.addEventListener ("click", () => {
    retornar()
})

var returnbtn = document.querySelector (".resultados")

function retornar() {
    returnbtn.style.display= 'none'
    if ([inputs] != 0) {
        console.log("Retornando a tela de cálculo!")
        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""
    }
}

var clear = document.querySelector ('#Limpar')

clear.addEventListener ("click", () => {
    limpar()
})

function limpar() {
    if ([inputs] != 0) {
        console.log("Valores zerados!")
        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""
    }
}

var end = document.querySelector ("#endbutton")

end.addEventListener ("click", () => {
    finalizar()
})

function finalizar() {
    console.log("Finalizando...")
    if ([inputs] != 0) {
        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""
    }
    returnbtn.style.display = 'none'
    telacalculo.style.display = 'none'
    telainiciar.style.display = 'flex'
}