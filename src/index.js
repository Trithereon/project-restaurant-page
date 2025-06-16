import generateHome from "./home.js";
import generateMenu from "./menu.js";
import generateHistory from "./history.js";
import generateNews from "./news.js";
import generateFaq from "./faq.js";
import "./styles.css";

generateHome(); // Initial homepage load.

const buttonHandlers = {
    'home': generateHome,
    'menu': generateMenu,
    'history': generateHistory,
    'news': generateNews,
    'faq': generateFaq,
};

document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const page = e.target.dataset.function;
        if (buttonHandlers[page]) {
            document.getElementById('content').innerHTML = '';
            buttonHandlers[page]();
        }
    }
});