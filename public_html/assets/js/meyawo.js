/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});



// Descrição Habilidades
const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<h2>HTML</h2> <span>É uma linguagem de marcação utilizada na construção de páginas na Web.</span> <br>',
                    '<h2>CSS</h2> <span>É um mecanismo para adicionar estilo a um documento web.</span> <br>',
                    '<h2>JavaScript</h2> <span>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</span> <br>',
                    '<h2>React</h2> <span>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</span> <br>',
                    '<h2>Git</h2> <span>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</span> <br>',
                    '<h2>Github</h2> <span>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </span> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    } )
} );