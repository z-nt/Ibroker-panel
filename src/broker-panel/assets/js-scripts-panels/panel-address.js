// select panel
const panelSection = document.getElementById("panel-section");
// select slide menu items
const slide-menuItems = document.querySelectorAll(".slide-items");
slide-menuItems.forEach((item) => {
    let itemId = item.id
    if (panelSection.classList == itemId) {
        item.previousElementSibling.classList.add("slide-items-off");
        item.classList.add("slide-items-on");
    }
});
