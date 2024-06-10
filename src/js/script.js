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
