const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
console.log(isIOS);

function setIOSHeight() {
    document.documentElement.style.setProperty('--isl_vh', window.innerHeight * .01);
}

if (isIOS) {
    setIOSHeight();

    window.addEventListener("resize", setIOSHeight);
}
