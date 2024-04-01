const scrollup = {
    init: function() {
        const scrollElem = document.querySelector('div.scrollUp')
        
        scrollElem.addEventListener('scroll', scrollup.handleScrollUp)
    },

    handleScrollUp: function() {
        // console.log('coucou')
    }
}

export default scrollup;