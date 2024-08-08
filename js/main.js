let clickLocation = 0
let rotationDeg = 0
let mouseDownSwipable = false
const center = 750

document.querySelectorAll('.swipable').forEach(item => {
    const style = window.getComputedStyle(item)
    item.style.left = style.left
    item.addEventListener('mousedown', event => {
        clickLocation = event.clientX - parseInt(item.style.left)
        mouseDownSwipable = true
    })
    item.addEventListener('mouseup', () => {
        mouseDownSwipable = false
        item.style.left = center+"px"
        item.style.transform = `rotate(${0}deg)`
    })
    document.addEventListener('mousemove', event => {
        if(mouseDownSwipable){
            item.style.left = event.clientX - clickLocation +"px"
            // rotationDeg = center - event.clientX
            item.style.transform = `rotate(${(center - event.clientX)/25}deg)`
        }
    })
})