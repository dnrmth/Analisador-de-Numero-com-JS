//Resolução mais simples utilizando 2 funções e sem loop

var tab = []
var res = document.getElementById('res')
var soma = 0
function adicionar(){
    var num = document.getElementById('txn')
    var n = Number(num.value)
    var sel = document.getElementById('sel')
    if(n<1 || n>100 || num.value.length == 0){
        window.alert('Você deve adicionar um valor entre 1 e 100')
    } else {
        var op = document.createElement('option')
        op.text = `Valor ${n} adicionado`
        op.value = `num ${n}`
        tab.push( n)
        sel.appendChild(op)
        soma += n
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    res.innerHTML = ''
    var max = Math.max.apply(null, tab)
    var min = Math.min.apply(null, tab)
    var med = soma/tab.length
    res.innerHTML += `<br>Ao todos, temos ${tab.length} números cadastrados`    
    res.innerHTML += `<br>O Maior número é: ${max}`
    res.innerHTML += `<br>O menor número é: ${min}`
    res.innerHTML += `<br>Somando todos os valores, temos: ${soma}`
    res.innerHTML += `<br>A média dos valores é: ${med}`
}