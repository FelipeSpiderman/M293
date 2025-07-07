document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);

      const spans = navToggle.querySelectorAll('span');
      if (isExpanded) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }
});

// Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    newsletterForm.innerHTML = '<p style="color:#4f8cff;font-weight:600;">Thank you for subscribing!</p>';
  });
}

// Contact Form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value.trim();
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    contactForm.innerHTML = '<p style="color:#4f8cff;font-weight:600;">Thank you for your message! We will get back to you soon.</p>';
  });
}

// Comment Section (per article, localStorage)
function getCommentsKey() {
  // Use pathname as key to separate comments per article
  return 'comments_' + window.location.pathname;
}
function renderComments() {
  const commentList = document.getElementById('comment-list');
  if (!commentList) return;
  const comments = JSON.parse(localStorage.getItem(getCommentsKey()) || '[]');
  commentList.innerHTML = '';
  if (comments.length === 0) {
    commentList.innerHTML = '<p style="color:#b0b3b8;">No comments yet. Be the first to comment!</p>';
    return;
  }
  comments.forEach(c => {
    const div = document.createElement('div');
    div.className = 'comment';
    div.innerHTML = `<strong>${escapeHTML(c.author)}</strong><br>${escapeHTML(c.text)}`;
    commentList.appendChild(div);
  });
}
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, function(tag) {
    const chars = {
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    };
    return chars[tag] || tag;
  });
}
const commentForm = document.getElementById('comment-form');
if (commentForm) {
  renderComments();
  commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const author = document.getElementById('comment-author').value.trim();
    const text = document.getElementById('comment-text').value.trim();
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
}