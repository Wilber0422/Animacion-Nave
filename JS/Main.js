function stars(){
    let count = 20;
    let scena = document.querySelector(".Scena");
    let i = 0;
    while(i < count){
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);

        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        star.style.left = x + "px";
        star.style.width = i + "px";
        star.style.height = h + "px";
        star.style.animationDuration = duration + "s";

        scena.appendChild(star);
        i++
    }
}
stars();