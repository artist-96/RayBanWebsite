
function effects(){
    Shery.imageEffect('.back', {
        style: 5,
        config:{"a":{"value":1.45,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.2905918057663126},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey: true
    })
}

effects();

const rayBan = document.querySelector('#raybanLogo');
const products = document.querySelector("#products");
const about = document.querySelector("#about");
const sale = document.querySelector("#sale");
const collections = document.querySelector("#collections");

const explore = document.querySelector('#expbtn');

let element = document.querySelectorAll('.elements');

element.forEach(function(element){

let h1s = element.querySelectorAll("h1");
let index = 0;
let anime = false;

document.querySelector('.main')
.addEventListener('click', function(event){

if(!anime){
    anime = true;
    gsap.to(h1s[index], {
        top: '-=100%',
        ease: Expo.easeInOut,
        duration: 0.5,
        onComplete: function(){
            gsap.set(this._targets[0], {
                top: '100%'
            });
            anime = false;
        }
    });

    if(index === (h1s.length - 1)){
        index = 0;
    }
    else{
        index++;
    }

    gsap.to(h1s[index], {
        top: '-=100%',
        ease: Expo.easeInOut,
        duration: 1
    });
}

// function for button clicks and hyperlinks

if(event.target == explore || event.target == rayBan){
    window.open('https://india.ray-ban.com/');
}

if(event.target == products){
    window.open('https://india.ray-ban.com/sunglasses-clp');
}

if(event.target == about){
    window.open('https://india.ray-ban.com/about-us?srsltid=AfmBOoptgJcWxuuIKnQsD1aWVUaWFucKZ5gaJaA4_ZOp_GlXBcmk-JLj');
}

if(event.target == sale){
    window.open('https://india.ray-ban.com/diwali-sale.html');
}

if(event.target == collections){
    window.open('https://india.ray-ban.com/change-collection');
}

});

});



