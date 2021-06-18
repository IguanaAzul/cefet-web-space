function forca_gravitacional(constante_gravitacional, massa_1, massa_2, distancia) {
    return (constante_gravitacional * massa_1 * massa_2)/(distancia ** 2);
}

function clica_calcular(){
    const constante_gravitacional = document.querySelector('#constante').value;
    const massa_1 = document.querySelector('#massa1').value;
    const massa_2 = document.querySelector('#massa2').value;
    const distancia = document.querySelector('#distancia').value;
    document.querySelector('#resultado').value = forca_gravitacional(constante_gravitacional, massa_1, massa_2, distancia);
}

document.querySelector('#calcular').addEventListener('click', clica_calcular);
