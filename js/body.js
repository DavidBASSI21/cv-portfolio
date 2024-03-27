const body = {
init: function() {
    const waveHand = document.querySelector('#wave_hand')
    console.log(waveHand);

    window.addEventListener("scroll", body.handleSectionAboutDisplay);
},

handleSectionAboutDisplay: function() {
    console.log(window.scrollY);
    const aboutTitleSection = document.querySelector('.section_about_title_container')
    const aboutSectionParagraph = document.querySelector('.section_paragraph')

    
    if (window.scrollY > 225) {
        aboutTitleSection.style.transform = 'translateY(0)'
        aboutTitleSection.style.opacity = 1
        aboutSectionParagraph.style.transform = 'translateX(0)'
        aboutSectionParagraph.style.opacity = 1

    }
}

}

export default body;