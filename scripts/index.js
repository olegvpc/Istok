const headerNavItems = document.querySelectorAll(".header__navigate-item")
const submenuListAll = document.querySelectorAll(".header__navigate-submenu")

// console.log(submenuListAll)

function openSubmenu(evt) {
    const navListElement = evt.currentTarget.querySelector(".header__navigate-submenu");
    if (navListElement) {
      navListElement.classList.add("visible");
    }
}

function closeSubmenu (evt) {
    const navListElement = evt.currentTarget.querySelector(".header__navigate-submenu");
    // console.log(evt.currentTarget)
    if (navListElement) {
      navListElement.classList.remove("visible")
    }
}

// function setMouseListener (evt) {
//     console.log(evt.currentTarget)
//     const submenu = evt.currentTarget
//     submenu.addEventListener("mouseout", console.log("CLOSE"))
// }

headerNavItems.forEach(headerItem => {
    headerItem.addEventListener("mouseover", openSubmenu);
    headerItem.addEventListener("mouseout", closeSubmenu);
})


// submenuListAll.forEach(subMenu => subMenu.addEventListener("mouseover", setMouseListener));



