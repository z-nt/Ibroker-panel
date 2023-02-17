// select panel
const panelSection = document.getElementById("panel-section");
// select slide menu items
const slide-menuItems = document.querySelectorAll(".slide-items");
slide-menuItems.forEach((item) => {
    let itemID = item.id
    if (panelSection.classList == itemID) {
        item.previousElementSibling.classList.add("slide-items-off");
        item.classList.add("slide-items-on");
    } else {
    }
});
