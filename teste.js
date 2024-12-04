function abrirAbas() {
    const abas = document.querySelectorAll('.titulo');
    abas.forEach(function(aba) {
        aba.classList.toggle('visible');  // Alterna a classe 'visible'
    });
}
