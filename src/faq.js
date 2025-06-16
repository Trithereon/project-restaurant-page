export default function generateFaq(){
    document.getElementById('content').innerHTML = `
<section id="faq" class="content-section">
<h2 class="section-title">Wisdom of the Elders (FAQ)</h2>
  
  <div class="faq-container">
    <!-- FAQ Item 1 -->
    <details class="faq-item" open>
      <summary class="faq-question">
        <span>What makes Lothlórien's Grace different from other elvish restaurants?</span>
        <svg class="faq-icon" viewBox="0 0 24 24" width="18" height="18">
          <path fill="var(--color-gold)" d="M7 10l5 5 5-5z"/>
        </svg>
      </summary>
      <div class="faq-answer">
        <p>Our ingredients are foraged daily from the protected groves of Lothlórien, and our recipes were personally blessed by Galadriel during the Third Age. The Miruvor served here comes from the same vintage served at the Council of Elrond.</p>
      </div>
    </details>

    <!-- FAQ Item 2 -->
    <details class="faq-item">
      <summary class="faq-question">
        <span>Is there a dress code?</span>
        <svg class="faq-icon" viewBox="0 0 24 24" width="18" height="18">
          <path fill="var(--color-gold)" d="M7 10l5 5 5-5z"/>
        </svg>
      </summary>
      <div class="faq-answer">
        <p>While we don't require formal elvish robes, guests are encouraged to wear attire worthy of Caras Galadhon. Silvers, greens, and golds are particularly favored.</p>
      </div>
    </details>

    <!-- FAQ Item 3 -->
    <details class="faq-item">
      <summary class="faq-question">
        <span>How do mortals make reservations?</span>
        <svg class="faq-icon" viewBox="0 0 24 24" width="18" height="18">
          <path fill="var(--color-gold)" d="M7 10l5 5 5-5z"/>
        </svg>
      </summary>
      <div class="faq-answer">
        <p>Send a raven to our enchanted mailbox at the edge of the Golden Wood, or whisper your request to any mallorn tree west of the Anduin. Confirmation will arrive via falling leaf.</p>
      </div>
    </details>
  </div>

  <div class="faq-contact">
    <p>Unanswered questions? Seek counsel at the <a href="/contact">Fountain of Answers</a>.</p>
  </div>
</section>
    `;
};