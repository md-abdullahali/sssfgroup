/* ============================================
   SSSf Group — Premium Business Website
   JavaScript — Interactions & Animations
   Multi-Page Version
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===== PRELOADER =====
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('hidden');
                document.body.style.overflow = '';
                animateHeroElements();
            }, 600);
        });
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = '';
        }, 3000);
    }

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');

    function handleNavScroll() {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavScroll);
    handleNavScroll();

    // ===== ACTIVE NAV LINK (Page-based) =====
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ===== MOBILE NAVIGATION TOGGLE =====
    const navToggle = document.getElementById('navToggle');
    const navLinksContainer = document.getElementById('navLinks');

    if (navToggle && navLinksContainer) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinksContainer.classList.contains('active');
            navToggle.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
            document.body.style.overflow = !isOpen ? 'hidden' : '';
        });

        // Close on nav-link click
        navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when tapping outside
        document.addEventListener('click', (e) => {
            if (navLinksContainer.classList.contains('active') &&
                !navLinksContainer.contains(e.target) &&
                !navToggle.contains(e.target)) {
                navToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ===== SCROLL-TRIGGERED ANIMATIONS =====
    function animateHeroElements() {
        const heroElements = document.querySelectorAll('.page-hero [data-animate], #hero [data-animate]');
        heroElements.forEach((el, i) => {
            const delay = parseInt(el.dataset.delay || 0) + (i * 40);
            setTimeout(() => {
                el.classList.add('animated');
            }, delay);
        });
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = parseInt(el.dataset.delay || 0);
                setTimeout(() => {
                    el.classList.add('animated');
                }, delay);
                animationObserver.unobserve(el);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
        const isHeroChild = el.closest('#hero') || el.closest('.page-hero');
        if (!isHeroChild) {
            animationObserver.observe(el);
        }
    });

    // Animate page-hero elements after load
    setTimeout(() => {
        document.querySelectorAll('.page-hero [data-animate]').forEach((el, i) => {
            const delay = parseInt(el.dataset.delay || 0) + (i * 60);
            setTimeout(() => el.classList.add('animated'), delay);
        });
    }, 400);

    // ===== COUNTER ANIMATION =====
    const counters = document.querySelectorAll('.stat-number[data-count]');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;
        countersAnimated = true;

        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const startTime = performance.now();

            function easeOutQuart(t) {
                return 1 - Math.pow(1 - t, 4);
            }

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easeOutQuart(progress);
                const currentValue = Math.floor(easedProgress * target);
                counter.textContent = currentValue;
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            }
            requestAnimationFrame(updateCounter);
        });
    }

    const statsSection = document.getElementById('stats');
    if (statsSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        counterObserver.observe(statsSection);
    }

    // ===== TESTIMONIAL SLIDER =====
    const testimonialTrack = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('#testimonialDots .dot');
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.testimonial-card').length;
    let autoSlideInterval;

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        currentSlide = index;
        if (testimonialTrack) testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
    }

    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
    }
    function stopAutoSlide() { clearInterval(autoSlideInterval); }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); startAutoSlide(); });
        nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); startAutoSlide(); });
    }
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => { goToSlide(index); startAutoSlide(); });
    });

    if (testimonialTrack) {
        let touchStartX = 0;
        testimonialTrack.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; stopAutoSlide(); }, { passive: true });
        testimonialTrack.addEventListener('touchend', (e) => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) goToSlide(currentSlide + (diff > 0 ? 1 : -1));
            startAutoSlide();
        }, { passive: true });
        startAutoSlide();
    }

    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoader = submitBtn.querySelector('.btn-loader');
            btnText.textContent = 'Sending...';
            btnLoader.hidden = false;
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            setTimeout(() => {
                contactForm.hidden = true;
                if (formSuccess) formSuccess.hidden = false;
                contactForm.reset();
                btnText.textContent = 'Send Inquiry';
                btnLoader.hidden = true;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';

                setTimeout(() => {
                    contactForm.hidden = false;
                    if (formSuccess) formSuccess.hidden = true;
                }, 5000);
            }, 1500);
        });

        contactForm.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('focus', () => field.parentElement.classList.add('focused'));
            field.addEventListener('blur', () => { if (!field.value) field.parentElement.classList.remove('focused'); });
        });
    }

    // ===== BACK TO TOP =====
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 500);
        });
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ===== SERVICE CARDS TILT (desktop only) =====
    const isTouchDevice = () => window.matchMedia('(hover: none)').matches;
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (isTouchDevice()) return;
            const rect = card.getBoundingClientRect();
            const rotateX = ((e.clientY - rect.top) - rect.height / 2) / rect.height * -3;
            const rotateY = ((e.clientX - rect.left) - rect.width / 2) / rect.width * 3;
            card.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });

    // ===== NAVBAR HIDE/SHOW ON SCROLL (skip when mobile menu open) =====
    let lastScrollY = 0;
    let ticking = false;

    function updateNavbarVisibility() {
        const scrollY = window.scrollY;
        const mobileMenuOpen = navLinksContainer && navLinksContainer.classList.contains('active');
        if (navbar && !mobileMenuOpen) {
            navbar.style.transform = (scrollY > lastScrollY && scrollY > 200) ? 'translateY(-100%)' : 'translateY(0)';
        }
        lastScrollY = scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(updateNavbarVisibility); ticking = true; }
    });

    // ===== KEYBOARD ACCESSIBILITY =====
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navToggle && navLinksContainer) {
            navToggle.classList.remove('active');
            navLinksContainer.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ===== CURRENT YEAR IN FOOTER =====
    const yearEl = document.querySelector('.footer-bottom p');
    if (yearEl) {
        yearEl.innerHTML = yearEl.innerHTML.replace('2025', new Date().getFullYear());
    }

    // ===== LEADERSHIP MODALS =====
    const modalTriggers = document.querySelectorAll('[data-open-modal]');
    const modalCloses = document.querySelectorAll('[data-close-modal]');
    const modals = document.querySelectorAll('.leader-modal');

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.remove('active');
            const navLinksContainer = document.getElementById('navLinks');
            const navOpen = navLinksContainer && navLinksContainer.classList.contains('active');
            if (!navOpen) {
                document.body.style.overflow = '';
            }
        }
    }

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-open-modal');
            openModal(modalId);
        });
    });

    modalCloses.forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = closeBtn.closest('.leader-modal');
            closeModal(modal);
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Extend global keydown listener to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    closeModal(modal);
                }
            });
        }
    });

});

