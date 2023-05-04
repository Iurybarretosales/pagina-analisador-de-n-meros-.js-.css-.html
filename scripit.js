let lista = []
let num = window.document.getElementById('txtn')
let cadastro = window.document.getElementById('cadastro')
let res = window.document.getElementById('res')

//funçao para adcionar enter como click em botão
//-----------------------------------------------------
document.addEventListener('keypress', function(e){
    if (e.key == "Enter"){
        let btn = window.document.getElementById('btn')

        btn.click();
    }
})
//------------------------------------------------------

function cadastrar() {
    if (num.value.length == 0 || Number(num.value) < 1 || Number(num.value) > 100 || lista.includes(Number(num.value))== true){ 
        window.alert('[ERRO] Valor invalido ou ja possui na lista ')

        
    } else { 
    
        lista.push(Number(num.value))
        cadastro.innerHTML = ''
        for(pos = 0; pos < lista.length; pos++){
            let criar_option = window.document.createElement('option')
            criar_option.innerText= `valor ${Number(lista[pos])} cadastrado com sucesso`
            cadastro.appendChild(criar_option)
            res.innerHTML = 'Calculando ...'
            console.log(Number(lista[pos]))
            
            
        }
        num.value = ''
        num.focus()
        
    }  
    
}
function finalizar() {
    if (lista.length == 0){
        window.alert('Adcione um valor antes de finalizar')

    }else{
        let tot = lista.length
        let maior = lista[0]
        let menor= lista[0]
        let soma = 0
        let media = 0
        for (let pos1 in lista){
            soma += lista[pos1]
            media = soma / Number(lista.length) 
            if(lista[pos1] > maior)
                maior = lista[pos1]
            if (lista[pos1]< menor)
                menor = lista[pos1]
        }

        res.innerHTML=''
        res.innerHTML+=`<p>Na lista possui ${tot} valores</p>`
        res.innerHTML+=`<p> ${maior} é o maior valor </p>`
        res.innerHTML+=`<p>${menor} é o menor valor </p>`
        res.innerHTML+=`<p>A soma é ${soma} </p>`
        res.innerHTML+=`<p>A media dos valores é : ${media} </p>`


    }

    
}

    
    
