// ============================================================
// BASIL & EMBER — SCRIPT.JS
// ============================================================

// ============================================================
// 1. SCROLL EFFECT: add/remove 'scrolled' class on navbar
// ============================================================
const nav = document.getElementById('siteNav');

const onScroll = () => {
    if (window.scrollY > 40) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ============================================================
// 2. ACTIVE LINK TRACKING via IntersectionObserver
// ============================================================
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

const byId = (id) => document.querySelector(`.nav-link[href="#${id}"]`);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                links.forEach((l) => l.classList.remove('active'));
                const link = byId(entry.target.id);
                if (link) link.classList.add('active');
            }
        });
    },
    {
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0,
    }
);

sections.forEach((s) => observer.observe(s));

// ============================================================
// 3. MOBILE MENU TOGGLE
// ============================================================
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

document.addEventListener('click', (e) => {
    const isNav = nav.contains(e.target);
    if (!isNav && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
    }
});

// ============================================================
// 4. SMOOTH SCROLL FOR NAV LINKS
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});
