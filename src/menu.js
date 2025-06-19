export default function generateMenu() {
    console.log('content was just deleted by pressing menu button.');
    document.getElementById('content').innerHTML = `
    <section id="menu" class="content-section">    
    <h1>Lothlórien's Grace</h1>
        <h2>Appetizers</h2>
        <div class="menu-item">
            <div class="item-name">Lembas Bread Trio</div>
            <div class="item-desc">Traditional Elvish waybread served with three seasonal spreads</div>
            <div class="item-price">14 silver pieces</div>
        </div>
        
        <div class="menu-item">
            <div class="item-name">Mirkwood Mushroom Tart</div>
            <div class="item-desc">Wild foraged mushrooms in a flaky pastry with herb-infused cream</div>
            <div class="item-price">18 silver pieces</div>
        </div>

        <h2>Main Courses</h2>
        <div class="menu-item">
            <div class="item-name">Mallorn-leaf Wrapped Salmon</div>
            <div class="item-desc">Fresh river salmon steamed in golden Mallorn leaves with lemon-thyme butter</div>
            <div class="item-price">32 silver pieces</div>
        </div>
        
        <div class="menu-item">
            <div class="item-name">Rivendell Herb-Crusted Venison</div>
            <div class="item-desc">Tender venison with a crust of wild herbs, served with roasted root vegetables</div>
            <div class="item-price">36 silver pieces</div>
        </div>

        <h2>Beverages</h2>
        <div class="menu-item">
            <div class="item-name">Vintage Miruvor Wine</div>
            <div class="item-desc">The legendary cordial of the Elves, served in crystal goblets (1 glass)</div>
            <div class="item-price">25 silver pieces</div>
        </div>
        
        <div class="menu-item">
            <div class="item-name">Ent-Draught Infusion</div>
            <div class="item-desc">Herbal tea blended with the essence of Fangorn's purest springs</div>
            <div class="item-price">12 silver pieces</div>
        </div>

        <h2>Desserts</h2>
        <div class="menu-item">
            <div class="item-name">Honeycomb of the Golden Wood</div>
            <div class="item-desc">Lavender-infused honeycomb with whipped cream and edible flowers</div>
            <div class="item-price">16 silver pieces</div>
        </div>
        </section>
        `;
}        