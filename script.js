    /*
    linkZap.setAttribute("href", "https://wa.me/?text=");
    textoPedido.innerHTML = 'Fechar pedido'
    */
    const opcao1 = document.querySelector('.alimento1');
    const opcao2 = document.querySelector('.alimento2');
    const opcao3 = document.querySelector('.alimento3');
    const opcao4 = document.querySelector('.bebida1');
    const opcao5 = document.querySelector('.bebida2');
    const opcao6 = document.querySelector('.bebida3');
    const opcao7 = document.querySelector('.sobremesa1');
    const opcao8 = document.querySelector('.sobremesa2');
    const opcao9 = document.querySelector('.sobremesa3');
// Funcao para deixar borda verde dos pratos principais
function selecionado1(prato) {
    if (opcao1.classList.contains('cor-selecionado') || opcao2.classList.contains('cor-selecionado') || opcao3.classList.contains('cor-selecionado')) {
        opcao1.classList.remove('cor-selecionado');
        opcao2.classList.remove('cor-selecionado');
        opcao3.classList.remove('cor-selecionado');
        prato.classList.add('cor-selecionado');
    } else {
        prato.classList.add('cor-selecionado');
    }
    botaoFinalizar()
}
// Funcao para deixar borda verde das bebidas
function selecionado2(bebida) {
    if (opcao4.classList.contains('cor-selecionado') || opcao5.classList.contains('cor-selecionado') || opcao6.classList.contains('cor-selecionado')) {
        opcao4.classList.remove('cor-selecionado');
        opcao5.classList.remove('cor-selecionado');
        opcao6.classList.remove('cor-selecionado');
        bebida.classList.add('cor-selecionado');
    } else {
        bebida.classList.add('cor-selecionado');
    }
    botaoFinalizar()
}
// Funcao para deixar borda verde das sobremesas
function selecionado3(sobremesa) {
    if (opcao7.classList.contains('cor-selecionado') || opcao8.classList.contains('cor-selecionado') || opcao9.classList.contains('cor-selecionado')) {
        opcao7.classList.remove('cor-selecionado');
        opcao8.classList.remove('cor-selecionado');
        opcao9.classList.remove('cor-selecionado');
        sobremesa.classList.add('cor-selecionado');
    } else {
        sobremesa.classList.add('cor-selecionado');
    }
    botaoFinalizar()
}
// Funcao para liberar o botao de finalizar
function botaoFinalizar() {
    const botaoBackground = document.querySelector(".fundocinza");
    if ((opcao1.classList.contains('cor-selecionado') || opcao2.classList.contains('cor-selecionado') || opcao3.classList.contains('cor-selecionado')) && (opcao4.classList.contains('cor-selecionado') || opcao5.classList.contains('cor-selecionado') || opcao6.classList.contains('cor-selecionado')) && (opcao7.classList.contains('cor-selecionado') || opcao8.classList.contains('cor-selecionado') || opcao9.classList.contains('cor-selecionado'))) {
        botaoBackground.style.backgroundColor = "#32B72F";
        }
}
