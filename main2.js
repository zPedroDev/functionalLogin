
// Dados da main
let dadosNome = document.getElementById('dadosNome')
let dadosSenha = document.getElementById('dadosSenha')

if(dadosNome.value == '' && dadosSenha.value == ''){
    dadosNome.value = 'admin'
    dadosSenha.value = 'admin'
}