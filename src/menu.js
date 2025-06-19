export default function generateMenu() {
 
    function createMenuItem(name, desc, price){
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        const itemName = document.createElement('div');
        itemName.className = 'item-name';
        itemName.textContent = name;

        const itemDesc = document.createElement('div');
        itemDesc.className = 'item-desc';
        itemDesc.textContent = desc;

        const itemPrice = document.createElement('div');
        itemPrice.className = 'item-price';
        itemPrice.textContent = price;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDesc);
        menuItem.appendChild(itemPrice);

        return menuItem;
    }

    function createSectionHeading(heading) {
        const menuSectionHeading = document.createElement('h2');
        menuSectionHeading.textContent = heading;

        return menuSectionHeading;
    }

    // Build page elements.
    const sectionContainer = document.createElement('section');
    sectionContainer.id = 'menu';
    sectionContainer.className = 'content-section';
    document.getElementById('content').appendChild(sectionContainer);

    const heading = document.createElement('h1');
    heading.textContent = "Lothlórien's Grace";
    sectionContainer.appendChild(heading);

    sectionContainer.appendChild(createSectionHeading("Appetizers"));
    sectionContainer.appendChild(createMenuItem(
        "Lembas Bread Trio", 
        "Traditional Elvish waybread served with three seasonal spreads", 
        "14 silver pieces"
    ));
    sectionContainer.appendChild(createMenuItem(
        "Mirkwood Mushroom Tart", 
        "Wild foraged mushrooms in a flaky pastry with herb-infused cream", 
        "18 silver pieces"
    ));

    sectionContainer.appendChild(createSectionHeading("Main Courses"));
    sectionContainer.appendChild(createMenuItem(
        "Mallorn-leaf Wrapped Salmon", 
        "Fresh river salmon steamed in golden Mallorn leaves with lemon-thyme butter", 
        "32 silver pieces"
    ));
    sectionContainer.appendChild(createMenuItem(
        "Rivendell Herb-Crusted Venison", 
        "Tender venison with a crust of wild herbs, served with roasted root vegetables", 
        "36 silver pieces"
    ));

    sectionContainer.appendChild(createSectionHeading("Beverages"));
    sectionContainer.appendChild(createMenuItem(
        "Vintage Miruvor Wine", 
        "The legendary cordial of the Elves, served in crystal goblets (1 glass)", 
        "25 silver pieces"
    ));
    sectionContainer.appendChild(createMenuItem(
        "Ent-Draught Infusion", 
        "Herbal tea blended with the essence of Fangorn's purest springs", 
        "8 silver pieces"
    ));

    sectionContainer.appendChild(createSectionHeading("Desserts"));
    sectionContainer.appendChild(createMenuItem(
        "Honeycomb of the Golden Wood", 
        "Lavender-infused honeycomb with whipped cream and edible flowers", 
        "16 silver pieces"
    ));

}        