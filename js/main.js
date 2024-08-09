let clickLocation = 0
let startX
let mouseDownSwipable = false

let lastMouseX = null;
let lastMouseY = null;
let lastTime = null;

let mouseSpeed = 0;

document.querySelectorAll('.swipable').forEach(item => {
    item.addEventListener('mousedown', event => {
        startX = parseInt(item.offsetLeft)
        item.style.transform = `scale(110%) translate(-45%, -45%) rotate(0deg)`
        clickLocation = event.clientX - startX
        mouseDownSwipable = true
    })
    document.addEventListener('mouseup', () => {
        mouseDownSwipable = false
        item.style.left = 50+"%"
        item.children[0].style.textShadow = `0px 2px 2px rgba(0, 0, 0, 0.5)`
        item.style.boxShadow = `0px 2px 20px rgba(0, 0, 0, 0.5)`
        item.style.transform = `rotate(${0}deg) translate(-50%, -50%)`
    })
    document.addEventListener('mousemove', event => {
        if(mouseDownSwipable){
            item.style.left = event.clientX - clickLocation +"px"
            item.style.boxShadow = `${(item.offsetLeft-startX)/75}px 2px 20px rgba(0, 0, 0, 0.5)`
            item.children[0].style.textShadow = `${(item.offsetLeft-startX)/250}px 2px 2px rgba(0, 0, 0, 0.5)`
            item.style.transform = `scale(110%) translate(-50%, ${-45 + (Math.abs(startX - event.clientX)/25)}%) rotate(${ (startX - event.clientX)/-75}deg) skew(${ (startX - event.clientX)/-100}deg, ${(startX - event.clientX)/-100}deg)`
        

            if (lastMouseX !== null && lastMouseY !== null && lastTime !== null) {
                let deltaX = event.clientX - lastMouseX;
                let deltaY = event.clientY - lastMouseY;
        
                let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
                requestAnimationFrame(() => mouseSpeed = distance)
            }
        
            lastMouseX = event.clientX;
            lastMouseY = event.clientY;
            lastTime = Date.now();
        }
    })
})