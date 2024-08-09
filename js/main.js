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
        // item.setPointerCapture(event.pointerId);
        clickLocation = event.clientX - startX
        mouseDownSwipable = true
    })
    document.addEventListener('mouseup', () => {
        mouseDownSwipable = false
        item.style.left = 50+"%"
        item.style.transform = `rotate(${0}deg) translate(-50%, -50%)`
    })
    document.addEventListener('mousemove', event => {
        if(mouseDownSwipable){
            item.style.left = event.clientX - clickLocation +"px"
            item.style.transform = `translate(-50%, -50%) rotate(${Math.min(15 * mouseSpeed, 100) * (event.clientX - lastMouseX < 0 ? -1 : 1) + (startX - event.clientX)/50}deg)`
        }

        if (lastMouseX !== null && lastMouseY !== null && lastTime !== null) {
            let deltaX = event.clientX - lastMouseX;
            let deltaY = event.clientY - lastMouseY;
    
            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            let timeDelta = Date.now() - lastTime;
    
            // mouse speed per milisecond :D
            mouseSpeed =(distance / timeDelta);
        }
    
        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
        lastTime = Date.now();
    })
})