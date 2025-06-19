export default function generateHistory() {

  function createTimelineItem(year, heading, desc){
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    const timelineYear = document.createElement('div');
    timelineYear.className = 'timeline-year';
    timelineYear.textContent = year;
    
    const timelineContent = document.createElement('div');
    timelineContent.className = 'timeline-content';

    const contentHeading = document.createElement('h3');
    contentHeading.textContent = heading;

    const contentDesc = document.createElement('p');
    contentDesc.textContent = desc;

    timelineItem.appendChild(timelineYear);
    timelineItem.appendChild(timelineContent);
    timelineContent.appendChild(contentHeading);
    timelineContent.appendChild(contentDesc);
    
    return timelineItem;
  }
  // Quote.
  const quote = document.createElement('blockquote');
  quote.className = 'history-quote';
  quote.textContent = "Where the light of the Two Trees lingers in every dish."
  const quoteAuthor = document.createElement('cite');
  quoteAuthor.textContent = "- Elrond of Rivendell";

  // Build page elements.
  const sectionContainer = document.createElement('section');
  sectionContainer.id = 'history';
  sectionContainer.className = 'content-section';

  const heading = document.createElement('h1');
  heading.textContent = "Lothlórien's Grace";

  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.textContent = "The History of Lothlórien's Grace";

  const timelineContainer = document.createElement('div');
  timelineContainer.className = 'timeline';

  document.getElementById('content').appendChild(sectionContainer);
  sectionContainer.appendChild(heading);  
  sectionContainer.appendChild(sectionTitle);
  sectionContainer.appendChild(timelineContainer);
  timelineContainer.appendChild(createTimelineItem(
    "Third Age 1981",
    "The Founding",
    "Established by the Noldor elf Calandil, a master chef who blended Valinor's ancient recipes with Middle-Earth's ingredients. The first feast was attended by Galadriel herself, who blessed the kitchens with a golden Mallorn sapling."
  ));
    timelineContainer.appendChild(createTimelineItem(
    "Third Age 2510",
    "The Miruvor Cellar",
    "Celebrían gifted the restaurant with a cask of vintage Miruvor from the Undying Lands, inspiring our signature wine program. The cellar now holds over 500 vintages, aged in enchanted oak barrels."
  ));
    timelineContainer.appendChild(createTimelineItem(
    "Fourth Age 120",
    "Modern Revival",
    "After the War of the Ring, Legolas restored the restaurant with Greenwood's finest artisans. Today, Chef Thaladir continues the tradition, foraging herbs from Fangorn Forest."
  ));
  
  sectionContainer.appendChild(quote);
  quote.appendChild(document.createElement('br'));
  quote.appendChild(quoteAuthor);
}