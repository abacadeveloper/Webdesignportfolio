/*CHANGE BACKGROUND HEADER*/
function scrollHeader(){
    const header = document.getElementById('header');
    /*When the scroll is greater than 50 viewport height, add the scroll header class to the header tag*/
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header') 
}

window.addEventListener('scroll', scrollHeader)

/*Services Modal*/
const modalViews = document.querySelectorAll('.services-modal')
const modalBtns = document.querySelectorAll('.services-button')
const modalClose = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

/*MIXITUP FILTER PORTFOLIO*/
let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

/*Link ACTIVE work*/
const linkWork = document.querySelectorAll('.work-item')

function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

/*===Swiper Testimonial===*/
let swiperTestimonial = new Swiper(".testimonial-container", {
    spaceBetween: 24,
    loop: true,
    grabCursor:true,


    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },

});

/*===Change Background Header===*/
function scrollHeader(){
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, add scroll header class to the headertag

    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


/*===Scroll Sections Active Link===*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link') 
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

//Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset:true,
})

sr.reveal(`.home-data`)
sr.reveal(`.home-handle`, {delay: 700})
sr.reveal(`.home-social, .home-scroll`, {delay: 900, origin: 'bottom'})

