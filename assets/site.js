// 導覽列捲動效果
const nav = document.getElementById('nav');
if (nav) addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40), {passive:true});

// 手機選單
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// 進場動畫
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// FAQ 手風琴
document.querySelectorAll('.qa button').forEach(btn => {
  btn.addEventListener('click', () => {
    const qa = btn.parentElement;
    const ans = qa.querySelector('.ans');
    const isOpen = qa.classList.contains('open');
    document.querySelectorAll('.qa.open').forEach(o => {
      o.classList.remove('open');
      o.querySelector('.ans').style.maxHeight = null;
    });
    if (!isOpen) {
      qa.classList.add('open');
      ans.style.maxHeight = ans.scrollHeight + 'px';
    }
  });
});
