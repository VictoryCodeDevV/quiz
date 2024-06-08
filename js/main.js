btnY = document.getElementById('windowBtnY');
btnNAround = document.getElementById('btnNAround');
btnN = document.getElementById('windowBtnN');
windowText = document.getElementById('windowText');

window.onmousemove = (e)=> {
    // x = e.pageX;
    // y = e.pageY;

    // btnYPos = btnY.getBoundingClientRect();
    // if(Math.abs(x - btnYPos.left) <= 65 && Math.abs(y - btnYPos.top) <= 65) {
    //     btnY.style.transform = 'translate(50px)'
    // }


}
xprev = 0;
yprev = 0;

btnNReplace = function() {
    // btnY.style.position = 'absolute'
    btnNPos = btnN.getBoundingClientRect();  // 100 100 -- 10%
    // x = btnYPos.left*0.9 + Math.random() * btnYPos.left * 0.2 // от 0 до left/10
    // y = btnYPos.top*0.9 + Math.random() * btnYPos.top * 0.2


    x = Math.random()*btnNPos.left/2;
    y = Math.random()*btnNPos.top/2;

    
    // y = Math.random() * 100 - 50;
    btnN.style.transform = `translateX(${xprev-x-100}px) translateY(${yprev-y-100}px)`;
    // btnY.style.transform = `translate()` 
    // btnY.style.left = x
    xprev = x;
    yprev = y;
}
btnNAround.addEventListener("mouseover", btnNReplace)


btnY.onclick = () => {
    windowText.innerHTML = 'Мы и не сомневались!'
    btnY.setAttribute('disabled', '');
    btnNAround.removeEventListener("mouseover", btnNReplace);

    btnY.style.cursor = 'default';
    btnN.style.cursor = 'default';
    btnN.style.transform = `translateX(0) translateY(0)`;
}