document.addEventListener('DOMContentLoaded', () => {

  // --- Hamburger Menu Logic ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');

  if (hamburgerBtn && dropdownMenu) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevents the 'document' click from closing it immediately
      const isVisible = dropdownMenu.style.display === 'flex';
      dropdownMenu.style.display = isVisible ? 'none' : 'flex';
    });

    // Close menu if clicking outside of it
    document.addEventListener('click', (e) => {
      if (dropdownMenu.style.display === 'flex' && !dropdownMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  }

  // --- Contact Form Submission ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      if (!name || !email) {
          alert('Please fill in all required fields.');
          return;
      }
      // Redirect to thank you page on successful submission
      window.location.href = '../Thank-you.html';
    });
  }

  // --- Topic Filtering Logic (from topics/index.html) ---
  const topicFilter = document.getElementById('topic-filter');
  const topicCards = document.querySelectorAll('.topic-card');

  if (topicFilter && topicCards.length > 0) {
    topicFilter.addEventListener('change', function() {
      const selectedValue = this.value;
      topicCards.forEach(card => {
        if (selectedValue === 'all' || card.dataset.topic === selectedValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // --- Article Comment Section (using localStorage) ---
  const commentForm = document.getElementById('comment-form');
  if (commentForm) {
    const getCommentsKey = () => 'comments_' + window.location.pathname;

    const escapeHTML = (str) => {
        const p = document.createElement('p');
        p.textContent = str;
        return p.innerHTML;
    };

    const renderComments = () => {
      const commentList = document.getElementById('comment-list');
      if (!commentList) return;
      
      const comments = JSON.parse(localStorage.getItem(getCommentsKey()) || '[]');
      commentList.innerHTML = ''; // Clear old comments

      if (comments.length === 0) {
        commentList.innerHTML = '<p>No comments yet. Be the first to comment!</p>';
        return;
      }

      comments.forEach(c => {
        const div = document.createElement('div');
        div.className = 'comment';
        div.innerHTML = `<strong>${escapeHTML(c.author)}:</strong><p>${escapeHTML(c.text)}</p>`;
        commentList.appendChild(div);
      });
    };

    commentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const authorInput = document.getElementById('comment-author');
      const textInput = document.getElementById('comment-text');
      
      const author = authorInput.value.trim();
      const text = textInput.value.trim();

      if (!author || !text) {
        alert('Please enter your name and comment.');
        return;
      }

      const comments = JSON.parse(localStorage.getItem(getCommentsKey()) || '[]');
      comments.push({ author, text });
      localStorage.setItem(getCommentsKey(), JSON.stringify(comments));

      commentForm.reset();
      renderComments();
    });

    renderComments();
  }
});