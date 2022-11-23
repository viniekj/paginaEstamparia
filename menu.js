const btnMobile = document.getElementById('btn-menu');

//Reduzir o header no scroll
function shrinkHeader(){
    let header = document.getElementById("header");
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
        header.style.height = "2rem";
        header.style.backgroundColor = "#0b0b0bba";
    }else
    {
     header.style.height = "5.5rem";
     header.style.backgroundColor ="#121212";
    }
}

//Abrir menu mobile
function openMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('open');
}
//Botão sumir ao scroll pg
function hideMenu(){
    let nav = document.getElementById('nav');
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        nav.classList.remove("open");
    };
}

//Print
btnMobile.addEventListener('click',openMenu);
window.onscroll = () => {shrinkHeader(),hideMenu()};
