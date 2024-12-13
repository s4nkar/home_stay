window.addEventListener('scroll', function () {
    if (window.scrollY >= 250) {
        document.getElementById('sub-header').classList.remove('custom-header-b');
    } else {
        document.getElementById('sub-header').classList.add('custom-header-b');
    }
    
    // if (window.scrollY >= 260) {
    //     document.getElementById('sub-header').classList.add('fixed');
    // } else {
    //     document.getElementById('sub-header').classList.remove('fixed');
    // }
});

window.addEventListener('load', function () {
    document.getElementById('sub-header').classList.add('custom-header-b');
})