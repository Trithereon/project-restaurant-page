export default function generateFaq(){

  const sectionContainer = document.createElement('section');
  sectionContainer.id = 'faq';
  sectionContainer.className = 'content-section';

  const heading = document.createElement('h1');
  heading.textContent = "Lothlórien's Grace";

  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.textContent = "Wisdom of the Elders (FAQ)";

  const faqContainer = document.createElement('div');
  faqContainer.className = 'faq-container';

  function createFaqItem({isOpenByDefault, question, answer}) {
    const faqItem = document.createElement('details');
    faqItem.className = 'faq-item';
    faqItem.open = isOpenByDefault;

    const faqQuestion = document.createElement('summary');
    faqQuestion.className = 'faq-question';
    
    const questionContent = document.createElement('span');
    questionContent.textContent = question;

    const faqIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    faqIcon.setAttribute('class', 'faq-icon');
    faqIcon.setAttribute('viewBox', '0 0 24 24');
    faqIcon.setAttribute('width', '18');
    faqIcon.setAttribute('height', '18');

    const faqIconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    faqIconPath.setAttribute('fill', '#d4af37');
    faqIconPath.setAttribute('d', 'M7 10l5 5 5-5z');

    const faqAnswer = document.createElement('div');
    faqAnswer.className = 'faq-answer';
    
    const faqAnswerContent = document.createElement('p');
    faqAnswerContent.textContent = answer;

    faqIcon.appendChild(faqIconPath);
    faqQuestion.append(questionContent, faqIcon);
    faqAnswer.appendChild(faqAnswerContent);
    faqItem.append(faqQuestion, faqAnswer);

    return faqItem;
  }

  const faqContact = document.createElement('div');
  faqContact.className = 'faq-contact';

  const faqContactContent = document.createElement('p');
  faqContactContent.textContent = "Unanswered questions? Seek counsel at the ";

  const faqContactLink = document.createElement('a');
  faqContactLink.textContent = "Fountain of Answers.";
  faqContactLink.href = '#'; // Placeholder.

  // Build page elements.
  document.getElementById('content').appendChild(sectionContainer);
  sectionContainer.append(heading, sectionTitle, faqContainer);
  faqContainer.appendChild(createFaqItem({
    isOpenByDefault: false, // Could choose to have a question open automatically.
    question: "What makes Lothlórien's Grace different from other elvish restaurants?",
    answer: "Our ingredients are foraged daily from the protected groves of Lothlórien, and our recipes were personally blessed by Galadriel during the Third Age. The Miruvor served here comes from the same vintage served at the Council of Elrond."
  }));
  faqContainer.appendChild(createFaqItem({
    isOpenByDefault: false,
    question: "Is there a dress code?",
    answer: "While we don't require formal elvish robes, guests are encouraged to wear attire worthy of Caras Galadhon. Silvers, greens, and golds are particularly favoured."
  }));
  faqContainer.appendChild(createFaqItem({
    isOpenByDefault: false,
    question: "How do mortals make reservations?",
    answer: "Send a raven to our enchanted mailbox at the edge of the Golden Wood, or whisper your request to any mallorn tree west of the Anduin. Confirmation will arrive via falling leaf."
  }));
  faqContactContent.appendChild(faqContactLink);
  faqContact.appendChild(faqContactContent);
  sectionContainer.appendChild(faqContact);
};