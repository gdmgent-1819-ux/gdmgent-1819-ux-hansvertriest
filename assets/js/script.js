let hamburger = document.getElementById('hamburger')
let cross = document.getElementById('cross')
let navMobile = document.getElementById('navMobile')
let dropDown = document.getElementById('dropDown');
let subMenu = document.getElementById('subMenu')
let dropDownTaal = document.getElementById('dropdownTaal')
let subMenuTaal = document.getElementById('subMenuTaal')

hamburger.addEventListener('click', () => {
    hamburger.style.visibility = "hidden";
    navMobile.style.visibility = "visible";
    cross.style.visibility = "visible";
})

cross.addEventListener('click', () => {
    hamburger.style.visibility = "visible";
    navMobile.style.visibility = "hidden"
    cross.style.visibility = "hidden";
})

dropDown.addEventListener('click', () => {
    if(subMenu.style.display === 'block'){
        subMenu.style.display = 'none';
    }else{
        subMenu.style.display = 'block';
        subMenuTaal.style.display = 'none';
    }
})
dropDownTaal.addEventListener('click', () => {
    if(subMenuTaal.style.display === 'block'){
        subMenuTaal.style.display = 'none';
    }else{
        subMenuTaal.style.display = 'block';
        subMenu.style.display = 'none';
    }
})