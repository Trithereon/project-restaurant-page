import chef from "./img/chef.jpg";
import feast from "./img/feast.jpg";
import cellar from "./img/cellar.jpg";

export default function generateNews(){


  const sectionContainer = document.createElement('section');
  sectionContainer.id = 'news';
  sectionContainer.className = 'content-section';

  const heading = document.createElement('h1');
  heading.textContent = "Lothlórien's Grace";

  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.textContent = "Tidings from the Golden Wood (News)";

  const newsGrid = document.createElement('div');
  newsGrid.className = 'news-grid';

  function createNewsCard({date, imgSrc, imgAlt, heading, desc, buttonText}) {
    const newsCard = document.createElement('article');
    newsCard.className = 'news-card';

    const newsDate = document.createElement('div');
    newsDate.className = 'news-date';
    newsDate.textContent = date;

    const image = document.createElement('img');
    image.className = 'news-image';
    image.src = imgSrc;
    image.alt = imgAlt;

    const articleHeading = document.createElement('h3');
    articleHeading.textContent = heading;

    const articleDesc = document.createElement('p');
    articleDesc.textContent = desc;

    const button = document.createElement('button');
    button.className = 'news-button';
    button.textContent = buttonText;

    newsCard.append(newsDate, image, articleHeading, articleDesc, button);

    return newsCard;
  }

  document.getElementById('content').appendChild(sectionContainer);
  sectionContainer.append(heading, sectionTitle, newsGrid);
  newsGrid.appendChild(createNewsCard({
    date: "10 Yavannië, Fourth Age 124",
    imgSrc: feast,
    imgAlt: "Elvish harvest feast",
    heading: "Annual Harvest Feast Announced",
    desc: "Join us under the Mallorn trees for a night of seasonal delicacies, including honey-glazed venison and elderflower-infused Miruvor. Reservations required.",
    buttonText: "Reserve Now"
  }));
  newsGrid.appendChild(createNewsCard({
    date: "25 Víressë, Fourth Age 124",
    imgSrc: chef,
    imgAlt: "Elvish chef Thaladir",
    heading: "Chef Thaladir Wins Golden Acorn Award",
    desc: `Our head chef was honored for his innovative dish: "Mallorn-leaf wrapped salmon with Lothlórien truffle sauce." The recipe will debut on next month's menu.`,
    buttonText: "View Menu"
  }));
  newsGrid.appendChild(createNewsCard({
    date: "1 Enderi, Fourth Age 123",
    imgSrc: cellar,
    imgAlt: "Wine cellar",
    heading: "Wine Cellar Expansion Complete",
    desc: "Our enchanted cellar now houses 1,000 vintages, including a rare batch of Dorwinion wine gifted by King Thranduil. Private tastings available.",
    buttonText: "Book Tasting"
  }));
};