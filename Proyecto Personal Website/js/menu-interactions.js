document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    let timeoutId;

    menuItems.forEach((menuItem) => {
        const submenu = menuItem.querySelector(".subMenu");

        menuItem.addEventListener("mouseenter", () => {
            clearTimeout(timeoutId);
            submenu.style.display = "block";
        });

        menuItem.addEventListener("mouseleave", () => {
            timeoutId = setTimeout(() => {
                submenu.style.display = "none";
            }, 500);
        });
    });
});
