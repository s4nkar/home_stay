window.addEventListener('scroll', function () {
    const isSmallDevice = window.innerWidth <= 950; 

    
    if (isSmallDevice) {
        document.getElementById('sub-header').classList.add('custom-header-b-block');
    }else{
        document.getElementById('sub-header').classList.remove('custom-header-b-block');
    }
    if (window.scrollY >= 250) {
        document.getElementById('sub-header').classList.remove('custom-header-b');
    } else {
        document.getElementById('sub-header').classList.add('custom-header-b');
        
    }
});

window.addEventListener('load', function () {
    const isSmallDevice = window.innerWidth <= 950; 

    
    if (isSmallDevice) {
        document.getElementById('sub-header').classList.add('custom-header-b-block');
    }else{
        document.getElementById('sub-header').classList.remove('custom-header-b-block');
    }
    if (window.scrollY >= 250) {
        document.getElementById('sub-header').classList.remove('custom-header-b');
    } else {
        document.getElementById('sub-header').classList.add('custom-header-b');
    }
})