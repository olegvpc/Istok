const headerNavItems = document.querySelectorAll(".header__navigate-item")
// const submenuListAll = document.querySelectorAll(".header__navigate-submenu")

function openSubmenu(evt) {
    const navListElement = evt.currentTarget.querySelector(".header__navigate-submenu");
    if (navListElement) {
      navListElement.classList.add("visible");
    }
}

function closeSubmenu (evt) {
    const navListElement = evt.currentTarget.querySelector(".header__navigate-submenu");
    if (navListElement) {
      navListElement.classList.remove("visible")
    }
}

headerNavItems.forEach(headerItem => {
    headerItem.addEventListener("mouseover", openSubmenu);
    headerItem.addEventListener("mouseout", closeSubmenu);
})



