
function setDate()
{'use strict'

    const teraz=new Date();
    let sekundy=teraz.getSeconds();
    let minuty=teraz.getMinutes();
    let godziny=teraz.getHours();
    
    console.log("Jest "+godziny+":"+minuty+":"+sekundy);

    //o ile stopni trzeba przesunac po sekundzie / minucie
    //360/60*minuty/sekundy >> minuty*6
    // lenistwo godzin jest 12 czyli 360/12*godziny >>godziny*30

    document.querySelector('.second-hand').style.transform=`rotate(${sekundy*6+90}deg)`;
    document.querySelector('.min-hand').style.transform=`rotate(${minuty*6+90}deg)`;
    document.querySelector('.hour-hand').style.transform=`rotate(${godziny*30+90}deg)`;

}


setInterval(setDate,1000);   // wywolaj setDate co 1000ms