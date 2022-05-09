// criando uma calculadora

function calculadora() {
    // definindo as opreções e pegando o valor de entrada do usuário
    // a variável "Number", força a entrada do usuário como número
    const operacao = Number(prompt('Escolha uma opção: \n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));

    //verificando se a operação é válida
    if (!operacao || operacao >= 7) { //se a entrada do usuário for uma string ou um número maior que 7, o erro irá aparecer
        alert('erro - operação inválida');
        calculadora();
    } else {
        // definindo variáveis
        // todas as entradas devem ser do tipo number, e por isso utiliza-se o "Number"
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        //verificando se a variáveis de entrada do usuário são válidas
        if (!n1 || !n2) {
            alert('erro - parâmetros inválidos');
            calculadora();
        } else {
            
            //definindo as funções
            function soma() {
                resultado = n1 + n2;

                // mostrando o resultado
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
            
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado à ${n2}ª potência é ${resultado}`);
                novaOperacao();
            }

            //nova operação
            // para impedir que necessite dar refresh a cada operação finalizada, e terminar a calculadora quando o usuário desejar
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até Mais!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }
    }
    /* // escolhendo a operação usando if e else
    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
        divisaoInteira();
    } else if (operacao == 6) {
        potenciacao();
    } */

    // escolhendo a operação usando o método switch case
    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
    }
}

calculadora();