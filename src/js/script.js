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

headerDropdown?.closest('li').addEventListener('mouseover', (e) => {
    e.stopPropagation();
    submenu.classList.add('open');
});
headerDropdown?.closest('li').addEventListener('mouseout', (e) => {
    e.stopPropagation();
    submenu.classList.remove('open');
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
    // const handleResize = () => {
    //     if (window.innerWidth < 590) {
    //         swiper2.disable();
    //     } else {
    //         swiper2.enable();
    //     }
    // };
    //
    // handleResize();
    //
    // window.addEventListener('resize', handleResize);
}



// modals

const overlay = document.querySelector('.overlay')
const showModal = (modal) => {
    overlay.classList.add('open');
    modal.classList.add('active');
}
const closeModal = (modal) => {
    overlay.addEventListener('click' , () => {
        overlay.classList.remove('open');
        modal.classList.remove('active');
    })
    const closeBtns =  modal.querySelectorAll('.close-btn');
    closeBtns?.forEach(closeBtn => {
        closeBtn.addEventListener('click' , () => {
            overlay.classList.remove('open');
            modal.classList.remove('active');
        })
    })

}

const showContactsModalBtns =  document.querySelectorAll('.show-contacts-modal');
const showPartnersModalBtns = document.querySelectorAll('.show-partners-modal');
const showAboutModalBtns = document.querySelectorAll('.show-about-modal');
const showAzsModalBtns = document.querySelectorAll('.show-azs-modal');
const showCardsModalBtns = document.querySelectorAll('.show-cards-modal');
const showSaleSingleModalBtns = document.querySelectorAll('.show-sale-single-modal');
const showNewsSingleModalBtns = document.querySelectorAll('.news-card');
const contactsModal = document.querySelector('.contacts-modal');
const partnersModal = document.querySelector('.partners-modal');
const aboutModal = document.querySelector('.about-modal');
const azsModal = document.querySelector('.azs-modal');
const cardsModal = document.querySelector('.cards-modal');
const saleSingleModal = document.querySelector('.sale-single-modal');
const newsSingleModal = document.querySelector('.news-single-modal');

showPartnersModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(partnersModal);
        closeModal(partnersModal);
    })
})
showContactsModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(contactsModal);
        closeModal(contactsModal);
    })
})

showAboutModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(aboutModal);
        closeModal(aboutModal);
    })
})

showAzsModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(azsModal);
        closeModal(azsModal);
    })
})

showCardsModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(cardsModal);
        closeModal(cardsModal);
    })
})

showSaleSingleModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(saleSingleModal);
        closeModal(saleSingleModal);
    })
})
showNewsSingleModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(newsSingleModal);
        closeModal(newsSingleModal);
    })
})

// accordeon


const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest(".box");
    let currentContent = currentBox.querySelector('.content');
    let currentHide =  e.target.closest(".box").querySelector('.hide');

    console.log(currentHide);

    currentBox.classList.toggle("active");

    if (currentHide) {
        currentHide.addEventListener('click' , (e)=> {
            e.stopPropagation();
            e.preventDefault()
            currentBox.classList.remove('active');
            currentContent.style.maxHeight = 0;
        })
    }
    if (currentBox.classList.contains("active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else {
        currentContent.style.maxHeight = 0;
    }
}