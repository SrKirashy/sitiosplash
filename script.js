let loading = document.querySelector('.loading');
let scrollPosition = 0;








window.addEventListener('scroll', ()=>{upDateLoading()});













function upDateLoading() {
    let scrollHeight = document.documentElement.scrollHeight;
    const scrollNow = window.scrollY + window.innerHeight;
    let percentage = (scrollNow  / scrollHeight) * 100;
    

    loading.style.width = `${percentage}%`;
}

divertissementUpdate()
function divertissementUpdate() {
    let divContainer = document.querySelector('.container_informations');
    let numberImages= data.divertissement;
    console.log(numberImages)
    divContainer.innerHTML = '<div class="informations_box"><div class="image_informations"><img src="./images/divertissement/playgroundInfantil.jpeg" alt=""></div><div class="text_box_informations"><h1>Playground Infantil</h1><p>Playground no gramado para crianças</p><div class="line_information"></div></div></div>'
}