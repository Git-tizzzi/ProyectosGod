const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
  function openModal(first, last, role, bio, tags) {
    const initials = first[0] + last[0];
    document.getElementById('modal-avatar').textContent = initials;
    document.getElementById('modal-name').textContent = first + ' ' + last;
    document.getElementById('modal-role').textContent = role;
    document.getElementById('modal-bio').textContent = bio;
    const tagsEl = document.getElementById('modal-tags');
    tagsEl.innerHTML = '';
    tags.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag tag-green';
      span.textContent = t;
      tagsEl.appendChild(span);
    });
    document.getElementById('modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(e) {
    if (e && e.target !== document.getElementById('modal') && !e.target.classList.contains('modal-close')) return;
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
  }
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });