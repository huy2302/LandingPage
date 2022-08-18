var prevScrollpos = window.pageYOffset;
document.getElementById('header').style.transition = '0.5s';
document.getElementById('header').style.top = '0';

window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('header').style.top = '0';
        document.getElementById('header').style.background = 'rgb(243 243 241)';
    }else {
        document.getElementById('header').style.top = '-62px';
    }
    prevScrollpos = currentScrollPos;
}

