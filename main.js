// Dados da index

let user = document.getElementById('user')
let senha = document.getElementById('senha')
let btn = document.getElementById('btn')



btn.addEventListener('click', ()=> {
    user = user.value
    senha = senha.value
    
    if(user === 'admin' && senha === 'admin'){
        window.location.href = "main.html"
        alert('Logado com Sucesso!')
        

    }else{
        alert('Dados incorretos, preencha novamente!')
    }   

})




