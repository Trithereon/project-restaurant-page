// This is what I want to append to div#content:
//         <h1>Lothlórien's Grace</h1>
//         <h3>The World's Finest Elvish Cuisine</h3>
//         <img src="./img/restaurant.jpg" alt="" class="hero" width="900" height="600">
//         <p>An ethereal dining sanctuary where ancient Elvish recipes meet modern culinary artistry. Dine under enchanted canopies on delicacies like Mallorn-leaf wrapped salmon and Vintage Miruvor wine, crafted with ingredients from old mythical forests. A feast for the senses, whispered to be blessed by Galadriel herself.</p>

import image from "./img/restaurant.jpg";

export default function generateHome() {
    const heading = document.createElement('h1');
    heading.textContent = "Lothlórien's Grace";
    document.getElementById('content').appendChild(heading);

    const subtitle = document.createElement('h2');
    subtitle.textContent = "The World's Finest Elvish Cuisine";
    document.getElementById('content').appendChild(subtitle);

    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'home-content-container');
    document.getElementById('content').appendChild(contentContainer);

    const img = document.createElement('img');
    img.setAttribute('src', image);
    img.setAttribute('alt', 'Picture of fancy Elvish restaurant meal');
    img.setAttribute('class', 'hero');
    img.setAttribute('width', '770');
    img.setAttribute('height', '513');
    document.getElementById('home-content-container').appendChild(img);

    const description = document.createElement('p');
    description.setAttribute('class', 'hero');
    description.textContent = "An ethereal dining sanctuary where ancient Elvish recipes meet modern culinary artistry. Dine under enchanted canopies on delicacies like Mallorn-leaf wrapped salmon and Vintage Miruvor wine, crafted with ingredients from old mythical forests. A feast for the senses, whispered to be blessed by Galadriel herself.";
    document.getElementById('home-content-container').appendChild(description);
};