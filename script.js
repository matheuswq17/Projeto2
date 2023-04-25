//Buscando a lista de um array usando o fr

let msg=document.getElementById('msg')

const usuarios=[
    {nome:"Huguinho", idade:18},
    {nome:"Zezinho", idade:19},
    {nome:"Luizinho", idade:20},
];

const Users =usuarios.length;

for (let i=0; i<Users; i++){
    msg.innerHTML +=`<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}

/* Criando um array de imagens*/
var imagens=[
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
];
/* Declarando variaveis*/
var Index =0;
var time =2000;

/* Criando uma função*/
function slideShow(){
    document.getElementById('image'). src =imagens[Index];
    Index++;
    if (Index == imagens.length) {Index =0;}/* verifica se tem imagens e conta*/
    setTimeout("slideShow()",time); /* definindo tempo de 2 milisegundos*/
}

slideShow();