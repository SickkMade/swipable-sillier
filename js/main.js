let clickLocation = 0
let startX
let mouseDownSwipable = false

document.querySelectorAll('.swipable').forEach(item => {
    item.addEventListener('mousedown', event => {
        startX = parseInt(item.offsetLeft)
        item.setPointerCapture(event.pointerId);
        clickLocation = event.clientX - startX
        mouseDownSwipable = true
    })
    item.addEventListener('mouseup', event => {
        item.releasePointerCapture(event.pointerId);
        mouseDownSwipable = false
        item.style.left = 50+"%"
        item.style.transform = `rotate(${0}deg) translate(-50%, -50%)`
    })
    document.addEventListener('mousemove', event => {
        if(mouseDownSwipable){
            item.style.left = event.clientX - clickLocation +"px"
            
            item.style.transform = `translate(-50%, -50%) rotate(${(startX - event.clientX)/25}deg)`
        }
    })
})