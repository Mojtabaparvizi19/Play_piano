
var lid = document.querySelectorAll("button").length;

for (var i = 0; i < lid ; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML)
        buttonIlumination(buttonInnerHTML)
        
    });
}


function makeSound(key){
    switch (key) {
        case "w":
        var tom1 = new Audio('sounds/key01.mp3')
        tom1.play();
        break;

        case "a":
            var tom2 = new Audio('sounds/key02.mp3')
            tom2.play();
            break;
        

        case "s":
            var tom3 = new Audio('sounds/key03.mp3')
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio('sounds/key04.mp3')
            tom4.play();
            break;

        case "f":
            var tom5 = new Audio('sounds/key05.mp3')
            tom5.play();
            break;

        case "g":
            var tom6 = new Audio('sounds/key06.mp3')
            tom6.play();
            break;
        

        case "h":
            var tom7 = new Audio('sounds/key07.mp3')
            tom7.play();
            break;

        case "j":
        var tom8 = new Audio('sounds/key08.mp3')
        tom8.play();
        break;

        case "k":
            var tom9 = new Audio('sounds/key09.mp3')
            tom9.play();
            break;
        
        case "l":
        var tom10 = new Audio('sounds/key10.mp3')
        tom10.play();
        break;
        

        default:
    } }

document.addEventListener("keydown", function (event) {

    makeSound(event.key)
    buttonIlumination(event.key)
})





function buttonIlumination(keyUsed) {
    let activeButton = document.querySelector("."+keyUsed)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 50)
}

