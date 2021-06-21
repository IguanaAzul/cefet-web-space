let botoes = document.querySelectorAll('.botao-expandir-retrair')

for (let b of botoes) {
    b.addEventListener('click', function() {
        let p = b.parentElement;
        p.classList.toggle('expandido');
        b.innerHTML = b.innerHTML === '-' ? '+' : '-';
    });
}
