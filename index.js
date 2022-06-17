// for(var i = 0; i < document.querySelectorAll(".box").length; i++ ){

// /*   An event listner for keypress listens in document      */
//     document.addEventListener("keydown", (event) =>{
//         // console.log(event.key);
//         document.querySelector(`.${event.key}`).classList.add("button-white");
//         setTimeout( () =>{
//             document.querySelector(`.${event.key}`).classList.remove("button-white");
//         }, 100 );

//         audioTrack(event.key);    
//     });
// /*  --------------------------------------------------------  */

// /*   An event listner for click listens for box class only     */
//     document.querySelectorAll(".box")[i].addEventListener("click", function () {
//         // console.log(this.innerHTML);
//         this.classList.add("button-white");
//         setTimeout(() => {
//             this.classList.remove("button-white");
//         }, 100);
        
//         audioTrack(this.innerHTML);    
//     });
// /*  --------------------------------------------------------  */

// }


/*   -------------_- Using J-query -_----------------        */

/*   An event listner for click listens for box class only     */
$('.box').on('click', function() {
       
       audioTrack($(this).text());
       $(`.${$(this).text()}`).addClass('button-white');
       setTimeout( () =>{
          $(`.${$(this).text()}`).removeClass('button-white'); 
        }, 100); 
});
/*  --------------------------------------------------------  */

/*   An event listner for keypress listens in document      */
$(document).on('keydown', function(e) {
       
    audioTrack(e.key);
    $(`.${e.key}`).addClass('button-white');
    setTimeout( () =>{
       $(`.${e.key}`).removeClass('button-white');
     }, 100); 
});
/*  --------------------------------------------------------  */












function audioTrack(key){
    switch (key) {

        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;

        default:
            console.log(key);     
    }
}