$(document).ready(() => {
    console.log('----------- DOCUMENT LOADED -----------');
    $('.other-information .age').html(new Date().getFullYear() - 2002)
    $('.career-year').html(new Date().getFullYear() - 2018)


    $('.open-menu').click(() => {
        $('header').addClass('active')
    })
    $('.close-menu').click(() => {
        $('header').removeClass('active')
    })
})
