// Fiquei um tempão tentando usardocument.querySelectorAll('.botao-expandir-retrair')
// Mas não soube como acessar oo paragrafo  na hora de dar o toggle, aí pensei na
// possibilidade de iterar nos próprios parágrafos.

let paragrafos = document.querySelectorAll('#aliens p')

for (let p of paragrafos) {
    let botao = p.querySelector('.botao-expandir-retrair');
    botao.addEventListener('click', function() {
        p.classList.toggle('expandido');
        botao.innerHTML = botao.innerHTML === '-' ? '+' : '-';
    });
}
