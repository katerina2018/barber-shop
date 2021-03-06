(() => {
    const mobileMenu = document.querySelector(".js-menu-container");
    const openMenuBtn = document.querySelector(".js-open-menu");
    const closeMenuBtn = document.querySelectorAll(".js-close-menu");

    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute("aria-expanded") === "true" || false;
        openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
        mobileMenu.classList.toggle("is-open");

        !isMenuOpen ? disableScrolling() : enableScrolling();
    };

    openMenuBtn.addEventListener("click", toggleMenu);

    closeMenuBtn.forEach(function(item) {
        item.addEventListener("click", toggleMenu);
    });

    // Закрываем мобильное меню на более широких экранах
    // в случае изменения ориентации устройства.
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
        if (!e.matches) return;
        mobileMenu.classList.remove("is-open");
        openMenuBtn.setAttribute("aria-expanded", false);
        enableScrolling();
    });
})();

function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function() {
        window.scrollTo(x, y);
    };
}

function enableScrolling() {
    window.onscroll = function() {};
}