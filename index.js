const headerBurger = document.querySelector('.header__burger'),
      headerNav = document.querySelector('.header__nav')

headerBurger.addEventListener('click',()=>{
  headerBurger.classList.toggle('active')
  headerNav.classList.toggle('active')
  document.body.classList.toggle('overflow')
})

const headerMenu = document.querySelector('.header__menu'),
      headerLogoSpan = document.querySelector('.header__logo-span')

handleScroll = () => {
  const position = window.scrollY
  if(position>20){
    headerMenu.classList.add('sticky')
    headerLogoSpan.classList.add('active')
  } else if (position < 20) {
    headerMenu.classList.remove('sticky')
    headerLogoSpan.classList.remove('active')
  }
}

document.addEventListener('scroll',handleScroll)