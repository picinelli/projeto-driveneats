/*function botaoFinalizar() {
    let botaoBackground = document.querySelector(".fundocinza")
    let linkZap = document.querySelector('.linkZap')
    let textoPedido = document.querySelector('.textoFinalizarPedido')
    encodeURIComponent()

    if (3 opcoes marcadas) {
        botaoBackground.style.backgroundColor = "#32B72F";
    }
    linkZap.setAttribute("href", "https://wa.me/?text=");
    botaoBackground.style.backgroundColor = "#32B72F";
    textoPedido.innerHTML = 'Fechar pedido'
}
*/
function selecionado1(prato) {
    let opcao1 = document.querySelector('.alimento1');
    let opcao2 = document.querySelector('.alimento2');
    let opcao3 = document.querySelector('.alimento3');
    if (opcao1.classList.contains('cor-selecionado') || opcao2.classList.contains('cor-selecionado') || opcao3.classList.contains('cor-selecionado')) {
        opcao1.classList.remove('cor-selecionado');
        opcao2.classList.remove('cor-selecionado');
        opcao3.classList.remove('cor-selecionado');
        prato.classList.add('cor-selecionado');
    } else {
        prato.classList.add('cor-selecionado');
    }
}
function selecionado2(bebida) {
    let opcao4 = document.querySelector('.bebida1');
    let opcao5 = document.querySelector('.bebida2');
    let opcao6 = document.querySelector('.bebida3');
    if (opcao4.classList.contains('cor-selecionado') || opcao5.classList.contains('cor-selecionado') || opcao6.classList.contains('cor-selecionado')) {
        opcao4.classList.remove('cor-selecionado');
        opcao5.classList.remove('cor-selecionado');
        opcao6.classList.remove('cor-selecionado');
        bebida.classList.add('cor-selecionado');
    } else {
        bebida.classList.add('cor-selecionado');
    }
}
function selecionado3(sobremesa) {
    let opcao7 = document.querySelector('.sobremesa1');
    let opcao8 = document.querySelector('.sobremesa2');
    let opcao9 = document.querySelector('.sobremesa3');
    if (opcao7.classList.contains('cor-selecionado') || opcao8.classList.contains('cor-selecionado') || opcao9.classList.contains('cor-selecionado')) {
        opcao7.classList.remove('cor-selecionado');
        opcao8.classList.remove('cor-selecionado');
        opcao9.classList.remove('cor-selecionado');
        sobremesa.classList.add('cor-selecionado');
    } else {
        sobremesa.classList.add('cor-selecionado');
    }
}
