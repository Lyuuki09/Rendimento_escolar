function abrirOpcao() {
    const abas = document.querySelectorAll('.opcao');
    abas.forEach(function(aba) {
        aba.classList.toggle('visible'); 
    });
}