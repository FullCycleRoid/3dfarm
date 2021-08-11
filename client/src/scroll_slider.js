console.log("check add scroll")

let textItem = document.querySelector(".process__block__text"),
    processBlock =  document.querySelector(".process__block"),
    processImg = processBlock.children[0].children[0];

let imgArray = [
    "/static/images/process/process1.jpg",
    "/static/images/process/process2.jpg",
    "/static/images/process/process3.jpg",
    "/static/images/process/process4.jpg",
];

let counter = 0
setImage(counter)

let onScrollHandler = function(e) {
    if (window.pageYOffset > 400 && window.pageYOffset < 1700) {
        counter = setCounter(e.deltaY, counter)
        setImage(counter)
        changeTitleActiveStatus(counter)
        changeParagraphActiveStatus(counter)
    }
}

function changeTitleActiveStatus(counter) {
    if (counter <= 0) {
        textItem.children[0].style.cssText = "color: #FF4140;"
        textItem.children[2].style.cssText = "color: #24242a;"
        textItem.children[4].style.cssText = "color: #24242a;"
        textItem.children[6].style.cssText = "color: #24242a;"
    } else if (counter === 1) {
        textItem.children[0].style.cssText = "color: #24242a;"
        textItem.children[2].style.cssText = "color: #FF4140;"
        textItem.children[4].style.cssText = "color: #24242a;"
        textItem.children[6].style.cssText = "color: #24242a;"
    } else if (counter === 2) {
        textItem.children[0].style.cssText = "color: #24242a;"
        textItem.children[2].style.cssText = "color: #24242a;"
        textItem.children[4].style.cssText = "color: #FF4140;"
        textItem.children[6].style.cssText = "color: #24242a;"
    } else if (counter >= 3) {
        textItem.children[0].style.cssText = "color: #24242a;"
        textItem.children[2].style.cssText = "color: #24242a;"
        textItem.children[4].style.cssText = "color: #24242a;"
        textItem.children[6].style.cssText = "color: #FF4140"
    }
}

function changeParagraphActiveStatus(counter) {
    if (counter <= 0) {
        textItem.children[1].style.cssText = "display: block"
        textItem.children[3].style.cssText = "display: none"
        textItem.children[5].style.cssText = "display: none"
        textItem.children[7].style.cssText = "display: none"
    } else if (counter === 1) {
        textItem.children[1].style.cssText = "display: none"
        textItem.children[3].style.cssText = "display: block"
        textItem.children[5].style.cssText = "display: none"
        textItem.children[7].style.cssText = "display: none"
    } else if (counter === 2) {
        textItem.children[1].style.cssText = "display: none"
        textItem.children[3].style.cssText = "display: none"
        textItem.children[5].style.cssText = "display: block"
        textItem.children[7].style.cssText = "display: none"
    } else if (counter >= 3) {
        textItem.children[1].style.cssText = "display: none"
        textItem.children[3].style.cssText = "display: none"
        textItem.children[5].style.cssText = "display: none"
        textItem.children[7].style.cssText = "display: block"
    }
}

function setCounter(deltaY, counter) {
    if (deltaY > 0 && counter < 4) {
        counter +=1
        console.log(counter)
        return counter
    } else if (deltaY < 0 && counter > 0) {
        counter -= 1
        console.log(counter)
        return counter
    } else {
        console.log(counter)
        return counter
    }
}

function setImage(counter) {
    if (counter <= 0) {
        processImg.src = imgArray[0]
    } else if (counter >= 3) {
        processImg.src = imgArray[3]
    } else {
        processImg.src = imgArray[counter]
    }
}

document.addEventListener ("wheel", onScrollHandler);