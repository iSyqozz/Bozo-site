const about_button = document.querySelector('.header-ele.about') as HTMLElement;
const tokenomics_button = document.querySelector('.header-ele.tokenomics') as HTMLElement;
const roadmap_button = document.querySelector('.header-ele.roadmap') as HTMLElement;
const bozo_logo = document.querySelector('.logo-first') as HTMLElement;
const first_description = document.querySelector('.first-description') as HTMLElement;
const first_section = document.querySelector('.section1') as HTMLElement;
var locked:boolean = true;
var interlude:boolean = true;

function playAudio(url:string) {
    new Audio(url).play();
  }

function main(){

    
    first_description.textContent = 'Welcome Fren!';
    setTimeout(() => {
        first_description.style.opacity = '0';
    }, 3000);

    setTimeout(() => {
        first_description.style.opacity = '1';
        first_description.innerHTML = `How are ya? is web3 treatin ya well?`;
    }, 4000);

    setTimeout(() => {
        first_description.style.opacity = '0';
    }, 7000);

    setTimeout(() => {
        first_description.style.opacity = '1';
        first_description.innerHTML = `Lots of rugs out there... stay safe!`;
    }, 8000);

    setTimeout(() => {
        first_description.style.opacity = '0';
    }, 11000);

    setTimeout(() => {
        first_description.style.opacity = '1';
        first_description.innerHTML = `JK MF IDGAF, hahahaha got ya didn't I Bozo?`;
    }, 12000);

    setTimeout(() => {
        first_description.style.opacity = '0';
    }, 15000);

    setTimeout(() => {
        first_description.style.opacity = '1';
        first_description.innerHTML = `W-wait.. you're not a Bozo?? Ahhh ic.`;        
    }, 16000);

    setTimeout(() => {
        first_description.style.opacity = '0';
    }, 19000);

    setTimeout(() => {
        first_description.style.opacity = '1';
        first_description.innerHTML = `No worries my normie fren!`;        
    }, 20000);

    setTimeout(() => {
        first_description.style.opacity = '0';
    }, 23000);

    setTimeout(() => {
        first_description.style.opacity = '1';
        first_description.innerHTML = `There’s a $<span style="color: #fe0002;">B</span><span style="color: #fe0002;">O</span><span style="color: #fe0002;">Z</span><span style="color: #fe0002;">O</span> in all of us, let's show the world, together!`;
    }, 24000);

    //after initial dialog
    setTimeout(() => {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = '../temp_style.css';
        document.head.appendChild(linkElement);

        const temp = ()=>{
            document.removeEventListener('scroll',temp);
            const linkElement = document.querySelector('link[href="../temp_style.css"]');
            if (linkElement) {
              linkElement.remove();
            }

            deny_access()
        }
        document.addEventListener('scroll',temp)
        
    }, 24200);


    function deny_access(){
        const commands = document.querySelector('.floating-commands') as HTMLElement;
        commands.style.opacity = '1';

        setTimeout(() => {
            commands.style.opacity = '0'
        }, 3000);

        setTimeout(() => {
            commands.style.opacity = '1';
            commands.textContent = 'Only the worthy shall pass'
        }, 4000);

        setTimeout(() => {
            commands.style.opacity = '0';
        }, 7000);

        setTimeout(() => {
            commands.style.opacity = '1';
            commands.textContent = 'The ridiculously rugged ,WL slave, GA chasing, Shitposting.. '
        }, 8000);

        setTimeout(() => {
            commands.style.opacity = '0';
        }, 11000);

        setTimeout(() => {
            commands.style.opacity = '1';
            commands.textContent = 'DEGENS';
            const bg_clouds = document.querySelectorAll('.clouds');
            bg_clouds.forEach((e:Element)=>{
                const ele = e as HTMLElement;
                ele.style.opacity = '0.2'; 
            })
        }, 12000);

        setTimeout(() => {
            commands.style.opacity = '0';
        }, 15000);

        setTimeout(() => {
            commands.style.opacity = '1';
            commands.textContent = 'NOW BONK MR BOZO UP THERE IF YOU ARE READY TO BE A BOZO!';
            const temp = ()=>{
                if (locked){
                    playAudio('../assets/Bozo - Sound Effect.mp3');
                    locked = false
                    commands.style.opacity = '0';
                    
                    bozo_logo.removeEventListener('click',temp);

                    const first_clouds = document.querySelectorAll('.clouds-first');
                    first_clouds.forEach((e:Element)=>{
                        const ele = e as HTMLElement;
                        ele.style.transform = 'translateX(0px)'; 
                    })

                    setTimeout(() => {
                        const locked_content = document.querySelector('.locked-content') as HTMLElement;
                        locked_content.style.display = 'block';
                        first_section.style.paddingBottom = '200px';
                        commands.classList.add('token-address');
                        commands.classList.remove('floating-commands')
                        commands.innerHTML = `<a href="https://solscan.io/token/Gq6QdwRBU4Tkjsn3Be76CmB6DGoJSibWmfQDPcpEGunt" target="_blank"> Official Wallet Address </a>`   
                        commands.style.opacity = '1';                        
                        
                    }, 500);
                }
            }
            bozo_logo.addEventListener('click',temp)
        }, 16000);
        
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

    
    setTimeout(() => {
        const top_bar = document.querySelector('.header') as HTMLElement;
        top_bar.classList.add('header-appear');
        for(var i = 0 ; i<top_bar.children.length; i++){
            const child = top_bar.children[i] as HTMLElement;
            setTimeout(() => {
                child.classList.add('header-ele-appear')
            }, ((i) * 100) + 100);
        }        
    }, 200);

    
    setTimeout(() => {
        bozo_logo.classList.add('logo-in-action');
        setTimeout(() => {
            first_description.classList.add('description1-in-action');
            bozo_logo.classList.add('logo-in-action-finish');
        }, 1200);
    }, 500);

    const first_clouds = document.querySelectorAll('.clouds-first');
    first_clouds.forEach((e:Element)=>{
        const ele = e as HTMLElement;
        ele.style.transform = 'translateX(3000px)'; 
    })
    

    
}

window.onload = ()=>{
    main()
}
