let myImage = document.querySelector('img');

myImage.onclick = function (){
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'img/linux.png'){
        myImage.setAttribute('src','img/linux2.png');
    }else{
        myImage.setAttribute('src','img/linux.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Linux is awesome , ' + myName;
    }
}


if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Linux is awesome ,  ' + storeName;

}

myButton.onclick = function (){
    setUserName();
}