const phoneSelect = document.querySelector('.phone-select .header-phones');
const phoneSelectWrap = document.querySelector('.phone-select');

console.log(phoneSelectWrap)

if (phoneSelect) {
    phoneSelect.addEventListener('click' , (e)=> {
        e.stopPropagation()
        let currentSelectWrap = e.target.closest('.phone-select');
        let currentSelectBody = currentSelectWrap.querySelector('.phone-select-wrapper');
        currentSelectBody.classList.toggle('active');
        phoneSelect.classList.toggle('active');
        phoneSelectWrap.classList.toggle('active');
    })
    document.addEventListener('click', (e)=> {
        let lists = document.querySelectorAll('.phone-select-wrapper.active')
        if (!e.target.closest('.phone-select') && lists){
            lists.forEach(el=> {
                el.classList.remove('active');
                phoneSelectWrap.classList.remove('active');
            })
        }
    })
}

// mobile-menu

const burger = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtns = document.querySelectorAll('.mobile-menu .close-btn');
const droprightItems = document.querySelectorAll('.mobile-menu .dropright');
const backBtns = document.querySelectorAll('.mobile-menu .back');

burger?.addEventListener('click' , ()=> {
    mobileMenu.classList.add('active')
})

closeBtns?.forEach(el=> {
    el.addEventListener('click' , ()=> {
        mobileMenu.classList.remove('active')
    })
})

droprightItems?.forEach(el=> {
    el.addEventListener('click' , (e)=> {
        e.preventDefault();
        let currScreen = el.closest('li').querySelector('.screen')
        currScreen.classList.add('active');
    })
})
backBtns.forEach(el=> {
    el.addEventListener('click' , (e)=> {
        e.stopPropagation();
        let droprightScreen = e.target.closest('.screen');
        droprightScreen.classList.remove('active');
    })
})


// header-dropdown

const headerDropdown = document.querySelector('.dropdown');
const submenu = document.querySelector(' .submenu');

headerDropdown?.addEventListener('click', (e) => {
    e.stopPropagation();
    submenu.classList.add('open');
});
document.addEventListener('click', (e) => {
    if (
        submenu.classList.contains('open') &&
        !e.target.closest('.submenu')
    ) {
        submenu.classList.remove('open');
    }
});


const mainSwiper = document.querySelector('.main-swiper');

if (mainSwiper) {
    const swiper1 = new Swiper(mainSwiper, {
        loop: true,
        pagination: {
            el: '.custom-swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
        },
    });
}

const saleSwiper = document.querySelector('.sale-swiper');

let swiper2;
if (saleSwiper) {
    swiper2 = new Swiper(saleSwiper, {
        loop: true,
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween:30,
        navigation: {
            nextEl: '.sale-custom-swiper-button-next',
            prevEl: '.sale-custom-swiper-button-prev',
        },
        breakpoints: {
            590: {
                direction: 'horizontal',
                slidesPerView: 2,
                spaceBetween: 20
            },
            830: {
                direction: 'horizontal',
                slidesPerView: 3,
                spaceBetween: 30
            },
            1150: {
                direction: 'horizontal',
                slidesPerView: 4,
                spaceBetween: 30
            },
            1250: {
                direction: 'horizontal',
                slidesPerView: 4,
                spaceBetween: 50
            }
        }
    });
}
const handleResize = () => {
    if (window.innerWidth < 590) {
        swiper2.disable();
    } else {
        swiper2.enable();
    }
};

handleResize();

window.addEventListener('resize', handleResize);