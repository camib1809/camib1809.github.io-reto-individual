const slider = document.querySelector(".slider");
const nameGun = document.querySelector("#namegun");
const price = document.querySelector("#price");
let mySwitch = document.querySelector("#mySwitch");
const guns = document.querySelector("#gun");

//Modificar Nombres y precios por

function printnameGun(){
    if(slider.value == "0"){
        nameGun.textContent = "CLASSIC";
        price.textContent = "200";
        guns.setAttribute('src', 'img/classic.png');

    }else if(slider.value == "25"){
        nameGun.textContent = "SPECTRE";
        price.textContent = "1600";
        guns.setAttribute('src', 'img/spectre.png');
    
    }else if(slider.value == "50"){
        nameGun.textContent = "PHANTOM";
        price.textContent = "2900";
        guns.setAttribute('src', 'img/phantom.png');
    
    }else if(slider.value == "75"){
        nameGun.textContent = "VANDAL";
        price.textContent = "3900";
        guns.setAttribute('src', 'img/Vandal.png');
    
    }else if(slider.value == "100"){
        nameGun.textContent = "OPERATOR";
        price.textContent = "4500";
        guns.setAttribute('src', 'img/Operator.png');
    }
}

//Animación fondo slider

slider.addEventListener("input",function (){
    let x = slider.value;
    let color = "linear-gradient(90deg, hsl(0, 56%, 45%) " + x + "%, hsl(0, 0%, 90%) " + x + "%)";
    slider.style.background = color;

    printnameGun();
    
    if(mySwitch.checked == true){
        let x = price.textContent*0.20;
        price.textContent = price.textContent-x;
        
    }else{
        printnameGun();
    }

});

//Descuento al activar el checkbox

mySwitch.addEventListener("input",function(){

    if(mySwitch.checked == true){
    let x = price.textContent*0.25;
    price.textContent = price.textContent-x;
    
    }else{
        printnameGun();
    }

    //prueba github
});

