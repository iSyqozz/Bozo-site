(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
const about_button = document.querySelector('.header-ele.about');
const tokenomics_button = document.querySelector('.header-ele.tokenomics');
const roadmap_button = document.querySelector('.header-ele.roadmap');
const bozo_logo = document.querySelector('.logo-first');
const first_description = document.querySelector('.first-description');
const first_section = document.querySelector('.section1');
var locked = true;
var interlude = true;
function playAudio(url) {
    new Audio(url).play();
}
function main() {
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
        const temp = () => {
            document.removeEventListener('scroll', temp);
            const linkElement = document.querySelector('link[href="../temp_style.css"]');
            if (linkElement) {
                linkElement.remove();
            }
            deny_access();
        };
        document.addEventListener('scroll', temp);
    }, 24200);
    function deny_access() {
        const commands = document.querySelector('.floating-commands');
        commands.style.opacity = '1';
        setTimeout(() => {
            commands.style.opacity = '0';
        }, 3000);
        setTimeout(() => {
            commands.style.opacity = '1';
            commands.textContent = 'Only the worthy shall pass';
        }, 4000);
        setTimeout(() => {
            commands.style.opacity = '0';
        }, 7000);
        setTimeout(() => {
            commands.style.opacity = '1';
            commands.textContent = 'The ridiculously rugged ,WL slave, GA chasing, Shitposting.. ';
        }, 8000);
        setTimeout(() => {
            commands.style.opacity = '0';
        }, 11000);
        setTimeout(() => {
            commands.style.opacity = '1';
            commands.textContent = 'DEGENS';
            const bg_clouds = document.querySelectorAll('.clouds');
            bg_clouds.forEach((e) => {
                const ele = e;
                ele.style.opacity = '0.2';
            });
        }, 12000);
        setTimeout(() => {
            commands.style.opacity = '0';
        }, 15000);
        setTimeout(() => {
            commands.style.opacity = '1';
            commands.textContent = 'NOW BONK MR BOZO UP THERE IF YOU ARE READY TO BE A BOZO!';
            const temp = () => {
                if (locked) {
                    playAudio('../assets/Bozo - Sound Effect.mp3');
                    locked = false;
                    commands.style.opacity = '0';
                    bozo_logo.removeEventListener('click', temp);
                    const first_clouds = document.querySelectorAll('.clouds-first');
                    first_clouds.forEach((e) => {
                        const ele = e;
                        ele.style.transform = 'translateX(0px)';
                    });
                    setTimeout(() => {
                        const locked_content = document.querySelector('.locked-content');
                        locked_content.style.display = 'block';
                        first_section.style.paddingBottom = '200px';
                    }, 500);
                }
            };
            bozo_logo.addEventListener('click', temp);
        }, 16000);
    }
    about_button.addEventListener('click', () => {
        const about_section = document.getElementById('about');
        about_section.scrollIntoView({ behavior: 'smooth' });
    });
    tokenomics_button.addEventListener('click', () => {
        const tokenomics_section = document.getElementById('tokenomics');
        tokenomics_section.scrollIntoView({ behavior: 'smooth' });
    });
    roadmap_button.addEventListener('click', () => {
        const roadmap_section = document.getElementById('roadmap');
        roadmap_section.scrollIntoView({ behavior: 'smooth' });
    });
    setTimeout(() => {
        const top_bar = document.querySelector('.header');
        top_bar.classList.add('header-appear');
        for (var i = 0; i < top_bar.children.length; i++) {
            const child = top_bar.children[i];
            setTimeout(() => {
                child.classList.add('header-ele-appear');
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
    first_clouds.forEach((e) => {
        const ele = e;
        ele.style.transform = 'translateX(3000px)';
    });
}
window.onload = () => {
    main();
};

},{}]},{},[1]);
