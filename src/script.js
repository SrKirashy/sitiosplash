let loading = document.querySelector('.loading');
let buttonViewMore = document.querySelector('.section_divertissement button');

let menu = document.querySelector('#img_menu');
let menuBox = document.querySelector('nav');
let backgroundMenu = document.querySelector('nav .background');
let menuOpen = document.querySelector('.menu_box');
let close = document.querySelector('.menu_box img');
let logoMenu = document.querySelector('.box_logo_menu');
let menuSpan = document.querySelectorAll('.navOptions span');

let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');

let scrollPosition = 0;
let imageId = 0;



divertissementUpdate(divertissement.length);
upDateImage(0);
getQuestions();
setInterval(()=>nextImage('+'),5000);



window.addEventListener('scroll', ()=>{upDateLoading()});
menu.addEventListener('click', ()=> {menuClicked()})
arrowLeft.addEventListener('click', ()=>{nextImage('-')})
arrowRight.addEventListener('click', ()=>{nextImage('+')})
buttonViewMore.addEventListener('click',()=> {divertissementUpdate(divertissement.length)})
menuSpan.forEach(e => e.addEventListener('click', (e)=>{menuSpanClicked(e)}))
function listenerQuestions() {
    let boxQuestions = document.querySelectorAll('.box_question');
    boxQuestions.forEach(e => e.addEventListener('click', (e)=>{upDateAnswer(e)}));
}




function upDateLoading() {
    let scrollHeight = document.documentElement.scrollHeight;
    const scrollNow = window.scrollY + window.innerHeight;
    let percentage = (scrollNow  / scrollHeight) * 100;
    

    loading.style.width = `${percentage}%`;
}

function menuClicked() {
    let screenWidth = window.screen.width;
    menuBox.style.display = "flex";
    backgroundMenu.style.display = "flex";
    menuOpen.style.display = "flex";

    setTimeout(()=>{
        if (screenWidth > 484) {
            menuOpen.style.width = '450px';
        }
        else {
            menuOpen.style.width = '340px';
        }
        logoMenu.style.opacity = "100%";
        backgroundMenu.style.opacity = "100%";
    }, 100);
    

    backgroundMenu.addEventListener('click',(e)=> {closeMenu(e)});
    close.addEventListener('click',(e)=> {closeMenu(e)});
}

function closeMenu(e) {
        menuOpen.style.width = '0px';
        backgroundMenu.style.opacity = "0%";
        logoMenu.style.opacity = "0%";

    setTimeout(()=>{
        menuBox.style.display = "none";
        backgroundMenu.style.display = "none";
        menuOpen.style.display = "none";
        },800)
}

function menuSpanClicked(e) {
    let valueSpan = e.currentTarget.textContent;
    let screenWidth = window.screen.width;

    switch (valueSpan) {
        case 'Menu':
            if (screenWidth < 895) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
            else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
            
            closeMenu();
            break;

        case 'Conheça Mais':
            
            if (screenWidth < 1140 && screenWidth > 896) {
                window.scrollTo({
                    top: 543,
                    behavior: 'smooth'
                })
            }
            else if (screenWidth < 895 && screenWidth >  512) {
                window.scrollTo({
                    top: 411,
                    behavior: 'smooth'
                })
            }
            else if (screenWidth < 512) {
                window.scrollTo({
                    top: 330,
                    behavior: 'smooth'
                })
            }
            else {
                window.scrollTo({
                    top: 740,
                    behavior: 'smooth'
                })
            }
            closeMenu();
            break;

        case 'Acomodações':
            if (screenWidth < 1140 && screenWidth > 896) {
                window.scrollTo({
                    top: 1236,
                    behavior: 'smooth'
                })
            }
            else if (screenWidth < 895 && screenWidth >  512) {
                window.scrollTo({
                    top: 1190,
                    behavior: 'smooth'
                })
            }
            else if (screenWidth < 512) {
                window.scrollTo({
                    top: 1155,
                    behavior: 'smooth'
                })
            }

            else {
                window.scrollTo({
                    top: 1703,
                    behavior: 'smooth'
                })
            }
            closeMenu();
            break;

        case 'Diversão':
            if (screenWidth < 1140 && screenWidth > 896) {
                window.scrollTo({
                    top: 2013,
                    behavior: 'smooth'
                })
            }
            else if (screenWidth < 895 && screenWidth >  512) {
                window.scrollTo({
                    top: 2009,
                    behavior: 'smooth'
                })
            }
            else if (screenWidth < 512) {
                window.scrollTo({
                    top: 1802,
                    behavior: 'smooth'
                })
            }

            else {
                window.scrollTo({
                    top: 2847,
                    behavior: 'smooth'
                })
            }
            closeMenu();
            break;
        
        case 'Perquntas Frequentes':
            if (screenWidth < 1140 && screenWidth > 896) {
                window.scrollTo({
                    top: 6098,
                    behavior: 'smooth'
                })
            }
            else if (screenWidth < 895 && screenWidth >  512) {
                window.scrollTo({
                    top: 7047,
                    behavior: 'smooth'
                })
            }
            else if (screenWidth <  512 && screenWidth > 375) {
                window.scrollTo({
                    top: 6530,
                    behavior: 'smooth'
                })
            }

            else if (screenWidth < 375) {
                window.scrollTo({
                    top: 5966,
                    behavior: 'smooth'
                })
            }

            else {
                window.scrollTo({
                    top: 7119,
                    behavior: 'smooth'
                })
            }
            closeMenu();
            break;
        
        case 'Localização':
            if (screenWidth < 1140 && screenWidth > 896) {
                window.scrollTo({
                    top: 7199,
                    behavior: 'smooth'
                })
            }
            else if (screenWidth < 895) {
                window.scrollTo({
                    top: 7843,
                    behavior: 'smooth'
                })
            }
            else {
                window.scrollTo({
                    top: 8304,
                    behavior: 'smooth'
                })
            }
            closeMenu();
            break;
        default:
            return;
    }
}

function nextImage (e) {
    if (e === '+') {
        if (imageId === homeImages.length - 1) {
            imageId = 0;
        } else {
            imageId += 1;
        }
        upDateImage(imageId)
    }
    else if (e === '-'){
        if (imageId === 0) {
            imageId += homeImages.length -1;
        } else {
            imageId -= 1
        }
        upDateImage(imageId)
    }
    else{
        console.log('error')
        return;
    }
}

function upDateImage(number) {
    let image = document.querySelector('.section_find_out_more .left_side .slide_image_box');
    let title = document.querySelector('.section_find_out_more .container h1');
    let subtitle = document.querySelector('.section_find_out_more .container p');
    
    image.style.opacity = '0%';
    title.style.opacity = '0%';
    subtitle.style.opacity = '0%';

    setTimeout(()=>{
        image.style.backgroundImage =  `url(./images/divertissement/${homeImages[number].img})`
        title.innerHTML = homeImages[number].title;
        subtitle.innerHTML = homeImages[number].subtitle;
        image.style.opacity = '100%';
        title.style.opacity = '100%';
        subtitle.style.opacity = '100%';
    },50)

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

function getQuestions(){
    let questionBox = document.querySelector('.container_questions');
    let questions = '';
    for (let item in questionsAndAnswers) {
        questions = questions + `
        <div class="box_question" id="${item}"> 
        <p>${questionsAndAnswers[item].question}</p>
        <img src="./assets/seta.png" alt="Seta para abrir resposta.">
        </div>
        `;
    }
    questionBox.innerHTML = questions;

    listenerQuestions();
}

function upDateAnswer(e) {
    let questionClicked = e.currentTarget;
    let questionClickedId = e.currentTarget.id;
    
    if(questionClicked === document.querySelector('.box_question.active') ) {
        cleanerAnswer();
    } else {

        cleanerAnswer();

        questionClicked.classList.add('active');
        questionClicked.querySelector('img').style.transform = 'rotate(-180deg)';
        
        let newDiv= document.createElement('div');
        newDiv.classList.add('answer');
        questionClicked.after(newDiv);


        document.querySelector('.answer').innerHTML = `<p>${questionsAndAnswers[questionClickedId].answer}</p>`;
        
        setTimeout(()=> {
            document.querySelector('.answer').style.marginTop = '0px';
            document.querySelector('.answer').style.opacity = '100%';
        },100);
        
    } 
};

function cleanerAnswer() {
    let elementActive = document.querySelector('.box_question.active');

    if(elementActive != null) {
        elementActive.querySelector('img').style.transform = 'rotate(0deg)';
        document.querySelector('.box_question.active').classList.remove('active');
        document.querySelector('.answer').remove();
    }
}