// Function to handle the visibility of the sub-header based on device size
const handleSubHeader = () => {
    const isSmallDevice = window.innerWidth <= 950;
    const subHeader = document.getElementById('sub-header');
    const subHeaderLogo = document.querySelector('.navbar-brand');
    
    // Toggle the custom-header-b-block class based on screen size
    if (isSmallDevice) {
        subHeader.classList.add('custom-header-b-block');
        subHeaderLogo.classList.add('d-none');
    } else {
        subHeader.classList.remove('custom-header-b-block');
        subHeaderLogo.classList.remove('d-none');
    }
    
    // Handle scroll behavior for custom-header-b class
    if (window.scrollY >= 250) {
        subHeader.classList.remove('custom-header-b');
        subHeaderLogo.classList.remove('d-none');
    } else {
        subHeader.classList.add('custom-header-b');
    }
};

// Function to handle the visibility of the banner review bar based on screen size
const handleBannerReviewBar = () => {
    const isSmallDevice = window.innerWidth <= 1200;
    const bannerReviewBar = document.getElementById('banner-review-bar');
    
    // Toggle the hidden attribute based on screen size
    if (isSmallDevice) {
        bannerReviewBar.setAttribute('hidden', true);
    } else {
        bannerReviewBar.removeAttribute('hidden');
    }
};

// Event listener for scroll
window.addEventListener('scroll', handleSubHeader);

// Event listener for load
window.addEventListener('load', function () {
    handleSubHeader(); // Check initial visibility for sub-header
    handleBannerReviewBar(); // Check initial visibility for banner review bar
});

// Event listener for resize
window.addEventListener('resize', function () {
    handleSubHeader(); // Re-check sub-header visibility on resize
    handleBannerReviewBar(); // Re-check banner review bar visibility on resize
});
