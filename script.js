let loading = document.querySelector('.loading');
let scrollPosition = 0;
let count = 1;







window.addEventListener('scroll', ()=>{upDateLoading()});













function upDateLoading() {
    let scrollHeight = document.documentElement.scrollHeight;
    const scrollNow = window.scrollY + window.innerHeight;
    let percentage = (scrollNow  / scrollHeight) * 100;
    

    loading.style.width = `${percentage}%`;    
}