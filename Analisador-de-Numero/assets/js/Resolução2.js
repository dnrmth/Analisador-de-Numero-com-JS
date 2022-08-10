//Resolução utilizando loops e funções para servir de paramêtro de outras funções.

let num = document.querySelector('input#txn')
let sel = document.querySelector('select#sel')
let res = document.getElementById('res')
let tab = []
let soma = 0
function isNum(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if(isNum(num.value) && !inList(num.value, tab)){
        tab.push(Number(num.value))
        let op = document.createElement('option')
        op.text = `Valor ${num.value} adicionado`
        sel.appendChild(op)
        res.innerHTML = '' 
    } else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (tab.length == 0){
        window.alert('Adicione Valores para finalizar')
    } else {
        let total = tab.length
        let maior = tab[0]
        let menor = tab[0]
        for(let pos in tab){
            if(tab[pos] > maior){
                maior = tab[pos]
            }
            if(tab[pos] < menor){
                menor = tab[pos]
            }
            soma += tab[pos]
        }
        let med = soma/tab.length
        res.innerHTML = ''
        res.innerHTML += `<br>Ao todo temos ${total} números`
        res.innerHTML += `<br>O maior valor é ${maior}`
        res.innerHTML += `<br>O menor valor é ${menor}`
        res.innerHTML += `<br>Somando todos os valores, temos ${soma}`
        res.innerHTML += `<br>A média dos valores é: ${med}`
    }
}