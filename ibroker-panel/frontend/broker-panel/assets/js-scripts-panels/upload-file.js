// select panel
const panelSection = document.getElementById("panel-section");
// select slide menu items
const slide-menuItems = document.querySelectorAll(".slide-items");
slide-menuItems.forEach((item) => {
    if (panelSection.classList == item.id) {
        item.previousElementSibling.classList.add("slide-items-off");
        item.classList.add("slide-items-on");
    } else {
    }
});
