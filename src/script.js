
let loading = document.querySelector('.loading');
let buttonViewMore = document.querySelector('.section_divertissement button');
let boxQuestions = document.querySelectorAll('.box_question');
let scrollPosition = 0;

const divertissement = [
    {title: 'Playground Infantil', subtitle:'Playground no gramado para as crianças',img:'playgroundInfantil.jpeg'},
    {title: 'Salão de Jogos', subtitle:'Com mesas de bilhar, sinuca , ping-pong, pebolim e air hockey.',img:'salaoDeJogos.jpeg'},
    {title: 'Campo de Futebol e Volei', subtitle:'Um campo gramado de futebol e um campo gramado de volei',img:'campoDeFutebol.jpeg'},
    {title: 'Salão de Festas', subtitle:'Salão fechado para festas e eventos com capacidade para 180 pessoas sentadas',img:'salãoDeFestas.jpeg'},
    {title: 'Piscinas Infantil', subtitle:'Piscina para crianças com profundidade crescente entre 20cm e 60cm',img:'piscinainfantil.jpeg'},
    {title: 'Salão Cerimonial', subtitle:'Salão fechado para realização de casamentos, cultos e apresentações',img:'salaoCerimonial.jpeg'},
    {title: 'Alimentação', subtitle:'Possibilidade de contratar nosso buffet',img:'alimentaçao.jpeg'},
    {title: 'Fogueira de Inverno', subtitle:'Fogueira de inverno com banco circular ',img:'fogueira.jpeg'},
    {title: 'Casinha de Boneca', subtitle:'Casinha de boneca para visitação',img:'CasaDeBoneca.jpeg'},
    {title: 'Lago', subtitle:'Lago com possibilidade limitada de pesca para grupo pequeno ',img:'Lago.jpeg'}
]




divertissementUpdate(divertissement.length);






window.addEventListener('scroll', ()=>{upDateLoading()});
buttonViewMore.addEventListener('click',()=> {divertissementUpdate(divertissement.length)})
boxQuestions.forEach(e => e.addEventListener('click', (e) => upDateQuestions(e)))


















function upDateLoading() {
    let scrollHeight = document.documentElement.scrollHeight;
    const scrollNow = window.scrollY + window.innerHeight;
    let percentage = (scrollNow  / scrollHeight) * 100;
    

    loading.style.width = `${percentage}%`;
}
















function divertissementUpdate(numberOfImages) {
    let divContainer = document.querySelector('.container_informations');
    let model = '';
    let action = buttonViewMore.textContent;    


    if (action == 'VER MAIS') {
        for (let i = 0; i < numberOfImages; i++) {
            model = model + `<div class="informations_box"><div class="image_informations"><img src="./images/divertissement/${divertissement[i].img}" alt=""></div><div class="text_box_informations"><h1>${divertissement[i].title}</h1><p>${divertissement[i].subtitle}</p><div class="line_information"></div></div></div>`;
            divContainer.innerHTML = model;
        }
        if (numberOfImages > 3) {
        buttonViewMore.textContent = 'VER MENOS'
        }
    } else {
        buttonViewMore.textContent = 'VER MAIS'
        divertissementUpdate(3);
    }
};

function upDateQuestions(e) {

    let questionClicked = e.currentTarget

    if(questionClicked == document.querySelector('.box_question.active') ) {
        cleanerQuestions();
    } else {

        cleanerQuestions();

        questionClicked.classList.add('active');
        questionClicked.querySelector('img').style.transform = 'rotate(-180deg)';
        
        let newDiv= document.createElement('div');
        newDiv.classList.add('answer');
        questionClicked.after(newDiv);

        document.querySelector('.answer').innerHTML = `<p>reposta fica aqui! reposta fica aqui! reposta fica aqui! reposta fica aqui!</p>`;
        
        setTimeout(()=> {
            document.querySelector('.answer').style.marginTop = '0px';
            document.querySelector('.answer').style.opacity = '100%';
        },100);
        
    } 
};

function cleanerQuestions() {
    let elementActive = document.querySelector('.box_question.active');

    if(elementActive != null) {
        elementActive.querySelector('img').style.transform = 'rotate(0deg)';
        document.querySelector('.box_question.active').classList.remove('active');
        document.querySelector('.answer').remove();
    }
}