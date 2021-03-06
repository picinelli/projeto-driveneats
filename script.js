    const opcao1 = document.querySelector('.alimento1');
    const opcao2 = document.querySelector('.alimento2');
    const opcao3 = document.querySelector('.alimento3');
    const opcao4 = document.querySelector('.bebida1');
    const opcao5 = document.querySelector('.bebida2');
    const opcao6 = document.querySelector('.bebida3');
    const opcao7 = document.querySelector('.sobremesa1');
    const opcao8 = document.querySelector('.sobremesa2');
    const opcao9 = document.querySelector('.sobremesa3');
    let pratoZap
    let bebidaZap
    let sobremesaZap
    let totalComida = 0
    let totalBebida = 0
    let totalSobremesa = 0
    let totalSoma = 0
    let nomePergunta
    let nomeEndereco
// Funcao para deixar borda verde dos pratos principais
function selecionado1(prato) {
    const marcado1 = document.querySelector('.marcado1');
    const marcado2 = document.querySelector('.marcado2');
    const marcado3 = document.querySelector('.marcado3');
    if (opcao1.classList.contains('cor-selecionado') || opcao2.classList.contains('cor-selecionado') || opcao3.classList.contains('cor-selecionado')) {
        opcao1.classList.remove('cor-selecionado');
        opcao2.classList.remove('cor-selecionado');
        opcao3.classList.remove('cor-selecionado');
        prato.classList.add('cor-selecionado');
    } else {
        prato.classList.add('cor-selecionado');
    }

    if (opcao1.classList.contains('cor-selecionado')) {
        marcado2.classList.add('esconder')
        marcado3.classList.add('esconder')
        marcado1.classList.remove('esconder')
    }
    if (opcao2.classList.contains('cor-selecionado')) {
        marcado3.classList.add('esconder')
        marcado1.classList.add('esconder')
        marcado2.classList.remove('esconder')
    }
    if (opcao3.classList.contains('cor-selecionado')) {
        marcado2.classList.add('esconder')
        marcado1.classList.add('esconder')
        marcado3.classList.remove('esconder')
    }

    botaoFinalizar()
}
// Funcao para deixar borda verde das bebidas
function selecionado2(bebida) {
    const marcado4 = document.querySelector('.marcado4');
    const marcado5 = document.querySelector('.marcado5');
    const marcado6 = document.querySelector('.marcado6');
    if (opcao4.classList.contains('cor-selecionado') || opcao5.classList.contains('cor-selecionado') || opcao6.classList.contains('cor-selecionado')) {
        opcao4.classList.remove('cor-selecionado');
        opcao5.classList.remove('cor-selecionado');
        opcao6.classList.remove('cor-selecionado');
        bebida.classList.add('cor-selecionado');
    } else {
        bebida.classList.add('cor-selecionado');
    }
    botaoFinalizar()

    if (opcao4.classList.contains('cor-selecionado')) {
        marcado6.classList.add('esconder')
        marcado5.classList.add('esconder')
        marcado4.classList.remove('esconder')
    }
    if (opcao5.classList.contains('cor-selecionado')) {
        marcado6.classList.add('esconder')
        marcado4.classList.add('esconder')
        marcado5.classList.remove('esconder')
    }
    if (opcao6.classList.contains('cor-selecionado')) {
        marcado4.classList.add('esconder')
        marcado5.classList.add('esconder')
        marcado6.classList.remove('esconder')
    }
}
// Funcao para deixar borda verde das sobremesas
function selecionado3(sobremesa) {
    const marcado7 = document.querySelector('.marcado7');
    const marcado8 = document.querySelector('.marcado8');
    const marcado9 = document.querySelector('.marcado9');
    if (opcao7.classList.contains('cor-selecionado') || opcao8.classList.contains('cor-selecionado') || opcao9.classList.contains('cor-selecionado')) {
        opcao7.classList.remove('cor-selecionado');
        opcao8.classList.remove('cor-selecionado');
        opcao9.classList.remove('cor-selecionado');
        sobremesa.classList.add('cor-selecionado');
    } else {
        sobremesa.classList.add('cor-selecionado');
    }
    botaoFinalizar()
    
    if (opcao7.classList.contains('cor-selecionado')) {
        marcado8.classList.add('esconder')
        marcado9.classList.add('esconder')
        marcado7.classList.remove('esconder')
    }
    if (opcao8.classList.contains('cor-selecionado')) {
        marcado7.classList.add('esconder')
        marcado9.classList.add('esconder')
        marcado8.classList.remove('esconder')
    }
    if (opcao9.classList.contains('cor-selecionado')) {
        marcado7.classList.add('esconder')
        marcado8.classList.add('esconder')
        marcado9.classList.remove('esconder')
    }
}
// Funcao para liberar o botao de finalizar
function botaoFinalizar() {
    const botaoBackground = document.querySelector(".fundocinza");
    const textoBotao = document.querySelector('.textoFinalizarPedido');
    if ((opcao1.classList.contains('cor-selecionado') || opcao2.classList.contains('cor-selecionado') || opcao3.classList.contains('cor-selecionado')) && (opcao4.classList.contains('cor-selecionado') || opcao5.classList.contains('cor-selecionado') || opcao6.classList.contains('cor-selecionado')) && (opcao7.classList.contains('cor-selecionado') || opcao8.classList.contains('cor-selecionado') || opcao9.classList.contains('cor-selecionado'))) {
        botaoBackground.style.backgroundColor = "#32B72F";
        textoBotao.innerHTML = 'Fechar pedido';
        botaoBackground.setAttribute('onclick', 'liberarConfirmacao()');
        }
    if (opcao1.classList.contains('cor-selecionado')) {
        const nomeConfirma1 = document.querySelector('.nome-confirma1');
        const precoConfirma1 = document.querySelector('.preco-confirma1');
        const precoSelecionado = document.querySelector('.preco1');
        const alimento1 = document.querySelector('.prato1');
        nomeConfirma1.innerHTML = alimento1.innerHTML
        pratoZap = alimento1.innerHTML
        precoConfirma1.innerHTML = precoSelecionado.innerHTML.replace(/^R\$ +/, '')
        totalComida = Number(parseFloat(`${precoSelecionado.innerHTML}`.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2));
    } else if (opcao2.classList.contains('cor-selecionado')) {
        const nomeConfirma1 = document.querySelector('.nome-confirma1');
        const precoConfirma1 = document.querySelector('.preco-confirma1');
        const precoSelecionado = document.querySelector('.preco2');
        const alimento2 = document.querySelector('.prato2');
        nomeConfirma1.innerHTML = alimento2.innerHTML;
        pratoZap = alimento2.innerHTML
        precoConfirma1.innerHTML = precoSelecionado.innerHTML.replace(/^R\$ +/, '');
        totalComida = Number(parseFloat(`${precoSelecionado.innerHTML}`.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2));
    } else if (opcao3.classList.contains('cor-selecionado')){
        const nomeConfirma1 = document.querySelector('.nome-confirma1');
        const precoConfirma1 = document.querySelector('.preco-confirma1');
        const precoSelecionado = document.querySelector('.preco3');
        const alimento3 = document.querySelector('.prato3');
        nomeConfirma1.innerHTML = alimento3.innerHTML;
        pratoZap = alimento3.innerHTML
        precoConfirma1.innerHTML = precoSelecionado.innerHTML.replace(/^R\$ +/, '');
        totalComida = Number(parseFloat(`${precoSelecionado.innerHTML}`.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2));
    }
    if (opcao4.classList.contains('cor-selecionado')) {
        const nomeConfirma2 = document.querySelector('.nome-confirma2');
        const precoConfirma2 = document.querySelector('.preco-confirma2');
        const precoSelecionado = document.querySelector('.preco4');
        const bebida1 = document.querySelector('.bebidaTexto1');
        nomeConfirma2.innerHTML = bebida1.innerHTML;
        bebidaZap = bebida1.innerHTML
        precoConfirma2.innerHTML = precoSelecionado.innerHTML.replace(/^R\$ +/, '')
        totalBebida = Number(parseFloat(`${precoSelecionado.innerHTML}`.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2));
    } else if (opcao5.classList.contains('cor-selecionado')) {
        const nomeConfirma2 = document.querySelector('.nome-confirma2');
        const precoConfirma2 = document.querySelector('.preco-confirma2');
        const precoSelecionado = document.querySelector('.preco5');
        const bebida2 = document.querySelector('.bebidaTexto2');
        nomeConfirma2.innerHTML = bebida2.innerHTML;
        bebidaZap = bebida2.innerHTML
        precoConfirma2.innerHTML = precoSelecionado.innerHTML.replace(/^R\$ +/, '');
        totalBebida = Number(parseFloat(`${precoSelecionado.innerHTML}`.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2));
    } else if (opcao6.classList.contains('cor-selecionado')){
        const nomeConfirma2 = document.querySelector('.nome-confirma2');
        const precoConfirma2 = document.querySelector('.preco-confirma2');
        const precoSelecionado = document.querySelector('.preco6');
        const bebida3 = document.querySelector('.bebidaTexto3');
        nomeConfirma2.innerHTML = bebida3.innerHTML;
        bebidaZap = bebida3.innerHTML
        precoConfirma2.innerHTML = precoSelecionado.innerHTML.replace(/^R\$ +/, '');
        totalBebida = Number(parseFloat(`${precoSelecionado.innerHTML}`.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2));
    }
    if (opcao7.classList.contains('cor-selecionado')) {
        const nomeConfirma3 = document.querySelector('.nome-confirma3');
        const precoConfirma3 = document.querySelector('.preco-confirma3');
        const precoSelecionado = document.querySelector('.preco7');
        const sobremesa1 = document.querySelector('.sobremesaTexto1');
        nomeConfirma3.innerHTML = sobremesa1.innerHTML;
        sobremesaZap = sobremesa1.innerHTML
        precoConfirma3.innerHTML = precoSelecionado.innerHTML.replace(/^R\$ +/, '');
        totalSobremesa = Number(parseFloat(`${precoSelecionado.innerHTML}`.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2));
    } else if (opcao8.classList.contains('cor-selecionado')) {
        const nomeConfirma3 = document.querySelector('.nome-confirma3');
        const precoConfirma3 = document.querySelector('.preco-confirma3');
        const precoSelecionado = document.querySelector('.preco8');
        const sobremesa2 = document.querySelector('.sobremesaTexto2');
        nomeConfirma3.innerHTML = sobremesa2.innerHTML;
        sobremesaZap = sobremesa2.innerHTML
        precoConfirma3.innerHTML = precoSelecionado.innerHTML.replace(/^R\$ +/, '');
        totalSobremesa = Number(parseFloat(`${precoSelecionado.innerHTML}`.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2));
    } else if (opcao9.classList.contains('cor-selecionado')){
        const nomeConfirma3 = document.querySelector('.nome-confirma3');
        const precoConfirma3 = document.querySelector('.preco-confirma3');
        const precoSelecionado = document.querySelector('.preco9');
        const sobremesa3 = document.querySelector('.sobremesaTexto3');
        nomeConfirma3.innerHTML = sobremesa3.innerHTML;
        sobremesaZap = sobremesa3.innerHTML
        precoConfirma3.innerHTML = precoSelecionado.innerHTML.replace(/^R\$ +/, '');
        totalSobremesa = Number(parseFloat(`${precoSelecionado.innerHTML}`.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2));
    }
}
function liberarConfirmacao() {
    const caixaConfirmacao = document.querySelector('.caixa-confirmacao');
    const cabecario = document.querySelector('.cabecario')
    const conteudo = document.querySelector('.conteudo')
    const pe = document.querySelector('.pe')
    let precoTexto = document.querySelector('.total__preco-texto')
    cabecario.classList.add('opacidade')
    conteudo.classList.add('opacidade')
    pe.classList.add('opacidade')
    caixaConfirmacao.classList.remove('esconder')
    totalSoma = (totalComida + totalBebida + totalSobremesa).toFixed(2)
    totalSoma = totalSoma.toString().replace(".", ",");
    precoTexto.innerHTML = `R$ ${totalSoma}`
    nomePergunta = window.prompt('Qual ?? o seu nome?')
    nomeEndereco = window.prompt('Qual ?? o seu endere??o?')
}
function cancelarConfirmacao() {
    const caixaConfirmacao = document.querySelector('.caixa-confirmacao');
    const cabecario = document.querySelector('.cabecario')
    const conteudo = document.querySelector('.conteudo')
    const pe = document.querySelector('.pe')
    cabecario.classList.remove('opacidade')
    conteudo.classList.remove('opacidade')
    pe.classList.remove('opacidade')
    caixaConfirmacao.classList.add('esconder')
}
function linkDoZap() {
    const linkZap = document.querySelector('.linkZap')
    let mensagem = `Ol??, gostaria de fazer o pedido:\n- Prato: ${pratoZap}\n- Bebida: ${bebidaZap}\n- Sobremesa: ${sobremesaZap}\nTotal: R$ ${totalSoma}\n\nNome: ${nomePergunta}\nEndere??o: ${nomeEndereco}`
    linkZap.setAttribute("href", `https://wa.me/?text=${encodeURIComponent(mensagem)}`);
    linkZap.setAttribute('target', '__blank')
}
