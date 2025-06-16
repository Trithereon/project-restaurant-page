export default function generateHistory() {
document.getElementById('content').innerHTML = `
<section id="history" class="content-section">
  <h2 class="section-title">The History of Lothlórien's Grace</h2>
  
  <div class="timeline">
    <!-- Timeline Item 1 -->
    <div class="timeline-item">
      <div class="timeline-year">Third Age 1981</div>
      <div class="timeline-content">
        <h3>The Founding</h3>
        <p>
          Established by the Noldor elf Calandil, a master chef who blended Valinor's ancient recipes with Middle-Earth's ingredients. 
          The first feast was attended by Galadriel herself, who blessed the kitchens with a golden Mallorn sapling.
        </p>
      </div>
    </div>

    <!-- Timeline Item 2 -->
    <div class="timeline-item">
      <div class="timeline-year">Third Age 2510</div>
      <div class="timeline-content">
        <h3>The Miruvor Cellar</h3>
        <p>
          Celebrían gifted the restaurant with a cask of vintage Miruvor from the Undying Lands, inspiring our signature wine program. 
          The cellar now holds over 500 vintages, aged in enchanted oak barrels.
        </p>
      </div>
    </div>

    <!-- Timeline Item 3 -->
    <div class="timeline-item">
      <div class="timeline-year">Fourth Age 120</div>
      <div class="timeline-content">
        <h3>Modern Revival</h3>
        <p>
          After the War of the Ring, Legolas restored the restaurant with Greenwood's finest artisans. 
          Today, Chef Thaladir continues the tradition, foraging herbs from Fangorn Forest.
        </p>
      </div>
    </div>
  </div>

  <blockquote class="history-quote">
    "Where the light of the Two Trees lingers in every dish."<br>
    — <cite>Elrond of Rivendell</cite>
  </blockquote>
</section>
`;
}