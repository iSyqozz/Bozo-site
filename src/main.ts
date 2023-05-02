console.log('test');
const about_button = document.querySelector('.header-ele.about') as HTMLElement;
const tokenomics_button = document.querySelector('.header-ele.tokenomics') as HTMLElement;
const roadmap_button = document.querySelector('.header-ele.roadmap') as HTMLElement;
const bozo_logo = document.querySelector('.logo-first') as HTMLElement;

function playAudio(url:string) {
    new Audio(url).play();
  }



about_button.addEventListener('click', ()=>{
    const about_section = document.getElementById('about') as HTMLElement;
    about_section.scrollIntoView({behavior:'smooth'})
})

tokenomics_button.addEventListener('click', ()=>{
    const tokenomics_section = document.getElementById('tokenomics') as HTMLElement;
    tokenomics_section.scrollIntoView({behavior:'smooth'})
})

roadmap_button.addEventListener('click', ()=>{
    const roadmap_section = document.getElementById('roadmap') as HTMLElement;
    roadmap_section.scrollIntoView({behavior:'smooth'})
})

bozo_logo.addEventListener('click',()=>{
    playAudio('../assets/Bozo - Sound Effect.mp3');
})