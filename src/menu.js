export default function generateMenu() {

    const sectionContainer = document.createElement('section');
    sectionContainer.setAttribute('id', 'menu');
    sectionContainer.setAttribute('class', 'content-section');
    document.getElementById('content').appendChild(sectionContainer);

    const menuContainer = document.getElementById('menu');
    const heading = document.createElement('h1');
    heading.textContent = "Lothlórien's Grace";
    menuContainer.appendChild(heading);
    
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
    menuContainer.appendChild(createSectionHeading("Appetizers"));
    menuContainer.appendChild(createMenuItem(
        "Lembas Bread Trio", 
        "Traditional Elvish waybread served with three seasonal spreads", 
        "14 silver pieces"
    ));
    menuContainer.appendChild(createMenuItem(
        "Mirkwood Mushroom Tart", 
        "Wild foraged mushrooms in a flaky pastry with herb-infused cream", 
        "18 silver pieces"
    ));

    menuContainer.appendChild(createSectionHeading("Main Courses"));
    menuContainer.appendChild(createMenuItem(
        "Mallorn-leaf Wrapped Salmon", 
        "Fresh river salmon steamed in golden Mallorn leaves with lemon-thyme butter", 
        "32 silver pieces"
    ));
    menuContainer.appendChild(createMenuItem(
        "Rivendell Herb-Crusted Venison", 
        "Tender venison with a crust of wild herbs, served with roasted root vegetables", 
        "36 silver pieces"
    ));

    menuContainer.appendChild(createSectionHeading("Beverages"));
    menuContainer.appendChild(createMenuItem(
        "Vintage Miruvor Wine", 
        "The legendary cordial of the Elves, served in crystal goblets (1 glass)", 
        "25 silver pieces"
    ));
    menuContainer.appendChild(createMenuItem(
        "Ent-Draught Infusion", 
        "Herbal tea blended with the essence of Fangorn's purest springs", 
        "8 silver pieces"
    ));

    menuContainer.appendChild(createSectionHeading("Desserts"));
    menuContainer.appendChild(createMenuItem(
        "Honeycomb of the Golden Wood", 
        "Lavender-infused honeycomb with whipped cream and edible flowers", 
        "16 silver pieces"
    ));

}        