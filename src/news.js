import chef from "./img/chef.jpg";
import feast from "./img/feast.jpg";
import cellar from "./img/cellar.jpg";

export default function generateNews(){
    document.getElementById('content').innerHTML = `
<section id="news" class="content-section">
  <h2 class="section-title">Tidings from the Golden Wood (News)</h2>
  
  <div class="news-grid">
    <!-- News Article 1 -->
    <article class="news-card">
      <div class="news-date">10 Yavannië, Fourth Age 124</div>
      <img src="${feast}" alt="Elvish harvest feast" class="news-image">
      <h3>Annual Harvest Feast Announced</h3>
      <p>
        Join us under the Mallorn trees for a night of seasonal delicacies, including 
        honey-glazed venison and elderflower-infused Miruvor. Reservations required.
      </p>
      <button class="news-button">Reserve Now</button>
    </article>

    <!-- News Article 2 -->
    <article class="news-card">
      <div class="news-date">25 Víressë, Fourth Age 124</div>
      <img src="${chef}" alt="Elvish chef Thaladir" class="news-image">
      <h3>Chef Thaladir Wins Golden Acorn Award</h3>
      <p>
        Our head chef was honored for his innovative dish: "Mallorn-leaf wrapped salmon 
        with Lothlórien truffle sauce." The recipe will debut on next month's menu.
      </p>
      <button class="news-button">View Menu</button>
    </article>

    <!-- News Article 3 -->
    <article class="news-card">
      <div class="news-date">1 Enderi, Fourth Age 123</div>
      <img src="${cellar}" alt="Wine cellar" class="news-image">
      <h3>Wine Cellar Expansion Complete</h3>
      <p>
        Our enchanted cellar now houses 1,000 vintages, including a rare batch of 
        Dorwinion wine gifted by King Thranduil. Private tastings available.
      </p>
      <button class="news-button">Book Tasting</button>
    </article>
  </div>

  <div class="news-subscribe">
    <h3>Receive Elvish News by Eagle-post</h3>
    <form class="subscribe-form">
      <input type="email" placeholder="Your email" required>
      <button type="submit" class="submit-button">Subscribe</button>
    </form>
  </div>
</section>
`;
};