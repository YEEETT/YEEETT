let down = false;

document.onscroll = function() {
    if (isBehindOtherElement(document.querySelector(".onscreen"))) {
        if (!down) {
            down = true;
            document.querySelector("nav .title h2").classList.add("switch");
            setTimeout(function() {
                document.querySelector('nav .title h2').innerHTML = title;
            }, 250);
            setTimeout(function() {
                document.querySelector("nav .title h2").classList.remove("switch");
            }, 500);
        }
    }
    if (!isBehindOtherElement(document.querySelector(".onscreen"))) {
        if (down) {
            down = false;
            document.querySelector("nav .title h2").classList.add("switch");
            setTimeout(function() {
                document.querySelector('nav .title h2').innerHTML = website;
            }, 250);
            setTimeout(function() {
                document.querySelector("nav .title h2").classList.remove("switch");
            }, 500);
        }
    }
}

function isBehindOtherElement(element) {
    const boundingRect = element.getBoundingClientRect();
    const left = boundingRect.left + 1;
    const right = boundingRect.right - 1;
    const top = boundingRect.top + 1;
    const bottom = boundingRect.bottom - 1;

    if (document.elementFromPoint(left, top) === element) return false;
    if (document.elementFromPoint(right, top) === element) return false;
    if (document.elementFromPoint(left, bottom) === element) return false;
    if (document.elementFromPoint(right, bottom) === element) return false;

    return true;
}