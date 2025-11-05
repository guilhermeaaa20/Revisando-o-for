//Atividade revisando o for
//Exercício 1:

let np = 10; //np: número pedido
for (let index=1; index<=np; index+=1) {
    console.log("Número:"+index);
};
    console.log("Feito!");

//Atividade 2:
    np = 10;    
for (index=1; index<=np; index+=1) {
    let soma = np + index;
    console.log("A soma de: "+np+" com "+index+" resulta em "+soma);
}; 
    console.log("Feito!")

//Atividade 3:
    np = 20;
for (index=1; index<=np; index+=1) {
    let pares = (index % 2 == 0);
    if (pares) {
        console.log("Número "+index+" par:"+pares);
    };
};
        console.log("Feito!");

//Atividade 4:
    np = 10;
    console.log("A tabuada do número "+np+" é:")
for (index=1; index<=np; index+=1) {
    let tabuada = np * index;
    console.log("Passo "+index+":  "+np+" * "+index+" = "+""+tabuada);
};
    console.log("Feito!");

//Atividade 5:
    np = 5;
    soma = 0;
for (index=1; index<np; index+=1) {
    numeros = parseInt(prompt("Digite números para calcular a média:"));
    soma = (soma + numeros);
};
    let media = (soma / np);
    console.log("A média dos números fornecidos é igual a: "+index);
    console.log("Feito!")

//Atividade 6:
    np = 1;
    console.log("Números na contagem regressiva:");
for (index=10; index>=np; index-=1) {
    console.log("Número:"+index);
};
    console.log("Feito!");

//Atividade 7:
    let number = prompt("Digite um número para ver seu fatorial:");
    console.log("Fatorial:");
    let fatorial = 1;
for (index=number; index>1; index-=1) {
    fatorial *= index // O "*="" é o mesmo que fatorial = fatorial * index, sendo uma atribuição e multiplicação ao mesmo tempo.
};
    console.log("O fatorial de "+number+" é: "+fatorial);
    console.log("Feito!");

//Atividade 8:
    console.log("Números Ímpares no intervalo:")
    let n1 = parseInt(prompt("Digite o primeiro número:"));
    let n2 = parseInt(prompt("Digite o segundo número:"));
if (n1<n2) {
    for (index=n1; index<=n2; index+=1) {
        let impar = (index % 2 !== 0);
        if (impar) {
            console.log("Número Ímpar: "+index);
        };
    };
};
if (n2<n1) {
    for (index=n2; index<=n1; index+=1) {
        let impar = (index % 2 !== 0);
        if (impar) {
            console.log("Número Ímpar: "+index);
        };
    };
};
    console.log("Feito");

//Atividade 9:
    console.log("Maior número pedido:");
    np = 5;
    let maiorn = 0; //maior número
for (index=1; index<=np; index+=1) {
    let numeros = parseInt(prompt("Digite números para no final ver o maior:"));
    if (numeros > maiorn) {
        maiorn = numeros;
    };
};
    console.log("O maior número digitado foi o: "+maiorn);
    console.log("Feito!");

//Atividade 10:
    console.log("Digite um número para que seja mostrado a sequencia de fibonacci até ele:");
    np = parseInt(prompt("Digite o número, onde a sequencia de fibonacci terá seu fim:"));
    fatorsoma = 1;
for (index=1; index<=np; index+=fatorsoma) {
    fatorsoma = index;
    console.log("Número: "+fatorsoma);
};
    console.log("Feito!");