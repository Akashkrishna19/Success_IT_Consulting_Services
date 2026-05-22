/* ============================================================
   SUDHAKAMAL IT SOLUTIONS — ENHANCED INTERACTIONS & ANIMATIONS
   ============================================================ */

(function() {
  'use strict';

  // ---- PAGE TRANSITION OVERLAY ----
  (function() {
    var overlay = document.createElement('div');
    overlay.className = 'page-transition';
    document.body.appendChild(overlay);
    setTimeout(function() {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, 1400);
  })();

  // ---- SCROLL PROGRESS BAR ----
  (function() {
    var bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.appendChild(bar);

    window.addEventListener('scroll', function() {
      var scrollTop = window.scrollY;
      var docH = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docH > 0 ? (scrollTop / docH) * 100 : 0;
      bar.style.width = pct + '%';
    });
  })();



  // ---- FLOATING WHATSAPP BUTTON ----
  (function() {
    var wa = document.createElement('a');
    wa.id = 'wa-float';
    wa.href = 'https://wa.me/917709603645';
    wa.target = '_blank';
    wa.rel = 'noopener';
    wa.setAttribute('aria-label', 'Chat on WhatsApp');
    wa.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 005.77 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.48-8.42zM12.08 21.8h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.52-5.25c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.13 1.03 7 2.91a9.83 9.83 0 012.9 7c0 5.47-4.45 9.92-9.91 9.92zm5.44-7.43c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15s-.77.98-.94 1.18c-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/></svg>';
    document.body.appendChild(wa);
  })();

  // ---- HERO PARTICLES ----
  (function() {
    var hero = document.getElementById('home');
    if (!hero) return;

    // Add scan line
    var scanline = document.createElement('div');
    scanline.className = 'hero-scanline';
    hero.appendChild(scanline);

    // Add grid overlay
    var grid = document.createElement('div');
    grid.className = 'hero-grid-overlay';
    hero.appendChild(grid);

    // Add particles
    var particles = document.createElement('div');
    particles.className = 'hero-particles';
    hero.appendChild(particles);

    var colors = ['rgba(74,144,217,0.8)', 'rgba(255,255,255,0.5)', 'rgba(22,85,162,0.9)', 'rgba(100,180,255,0.6)'];

    for (var i = 0; i < 30; i++) {
      var span = document.createElement('span');
      var size = (Math.random() * 4 + 2) + 'px';
      span.style.cssText = [
        'left:' + Math.random() * 100 + '%',
        'top:' + Math.random() * 100 + '%',
        'width:' + size,
        'height:' + size,
        'background:' + colors[Math.floor(Math.random() * colors.length)],
        'animation-duration:' + (Math.random() * 6 + 4) + 's',
        'animation-delay:' + (Math.random() * 5) + 's',
        'border-radius:50%'
      ].join(';');
      particles.appendChild(span);
    }
  })();

  // ---- TYPEWRITER EFFECT FOR HERO HEADING ----
  (function() {
    // The typewriter effect for the hero sub-text (the tag line)
    var hero = document.getElementById('home');
    if (!hero) return;

    var tagline = hero.querySelector('p.whitecolor');
    if (!tagline) return;

    // Add cursor to a label element
    var smallLabel = hero.querySelector('p.whitecolor[style*="letter-spacing"]');
    if (smallLabel) {
      smallLabel.style.borderRight = '2px solid rgba(255,255,255,0.7)';
      smallLabel.style.animation = 'typewriterBlink 1s step-end infinite';
      setTimeout(function() {
        smallLabel.style.borderRight = 'none';
        smallLabel.style.animation = '';
      }, 4000);
    }
  })();

  // ---- NAVBAR SCROLL EFFECT ----
  (function() {
    var nav = document.querySelector('.static-nav');
    if (!nav) return;

    function checkScroll() {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  })();

  // ---- INTERSECTION OBSERVER FOR STAGGER ANIMATIONS ----
  (function() {
    if (!('IntersectionObserver' in window)) return;

    // Service cards
    var svcCards = document.querySelectorAll('.services-grid .svc-card');
    if (svcCards.length) {
      var svcObs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
          }
        });
      }, { threshold: 0.15 });
      svcCards.forEach(function(el) { svcObs.observe(el); });
    }

    // Why cards
    var whyCards = document.querySelectorAll('.why-grid .why-card');
    if (whyCards.length) {
      var whyObs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
          }
        });
      }, { threshold: 0.15 });
      whyCards.forEach(function(el) { whyObs.observe(el); });
    }

    // Comment items (testimonials)
    var testCards = document.querySelectorAll('.comment-thread .comment-item');
    if (testCards.length) {
      var testObs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
          }
        });
      }, { threshold: 0.15 });
      testCards.forEach(function(el) { testObs.observe(el); });
    }

    // Tech badges
    var badges = document.querySelectorAll('.tech-grid .tech-badge');
    if (badges.length) {
      var badgeObs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('badge-visible');
          }
        });
      }, { threshold: 0.1 });
      badges.forEach(function(el) { badgeObs.observe(el); });
    }
  })();

  // ---- RIPPLE EFFECT ON ALL BUTTONS ----
  (function() {
    document.addEventListener('click', function(e) {
      var btn = e.target.closest('.button, .btn, button');
      if (!btn) return;

      var ripple = document.createElement('span');
      var rect = btn.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height);
      var x = e.clientX - rect.left - size / 2;
      var y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = [
        'position:absolute',
        'width:' + size + 'px',
        'height:' + size + 'px',
        'left:' + x + 'px',
        'top:' + y + 'px',
        'background:rgba(255,255,255,0.35)',
        'border-radius:50%',
        'transform:scale(0)',
        'animation:ripple 0.6s linear',
        'pointer-events:none',
        'z-index:99'
      ].join(';');

      if (getComputedStyle(btn).position === 'static') {
        btn.style.position = 'relative';
      }
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(function() {
        if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
      }, 700);
    });
  })();

  // ---- CURSOR GLOW (DESKTOP) ----
  (function() {
    if (window.innerWidth < 768) return;

    var dot = document.createElement('div');
    dot.className = 'cursor-dot';
    var ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    var mx = 0, my = 0;
    var rx = 0, ry = 0;

    document.addEventListener('mousemove', function(e) {
      mx = e.clientX;
      my = e.clientY;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      dot.style.left = (mx - 4) + 'px';
      dot.style.top = (my - 4) + 'px';
    });

    function animateCursor() {
      rx += (mx - rx - 16) * 0.12;
      ry += (my - ry - 16) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Enlarge ring on interactive elements
    document.querySelectorAll('a, button, .svc-card, .why-card, .tech-badge, .comment-bubble').forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        ring.style.transform = 'scale(2)';
        ring.style.borderColor = 'rgba(22,85,162,0.8)';
        dot.style.transform = 'scale(0.5)';
      });
      el.addEventListener('mouseleave', function() {
        ring.style.transform = 'scale(1)';
        ring.style.borderColor = 'rgba(22,85,162,0.5)';
        dot.style.transform = 'scale(1)';
      });
    });
  })();

  // ---- ANIMATED COUNTER NUMBERS ----
  (function() {
    var counters = document.querySelectorAll('.count_nums');
    if (!counters.length) return;

    var done = false;

    function animateCounter(el) {
      var target = parseInt(el.getAttribute('data-to'), 10);
      var speed = parseInt(el.getAttribute('data-speed'), 10) || 2000;
      var start = 0;
      var increment = target / (speed / 16);
      var timer = setInterval(function() {
        start += increment;
        if (start >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(start);
        }
      }, 16);
    }

    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !done) {
          done = true;
          counters.forEach(animateCounter);
        }
      });
    }, { threshold: 0.5 });

    if (counters[0]) obs.observe(counters[0]);
  })();

  // ---- SMOOTH HOVER TILT ON SERVICE CARDS ----
  (function() {
    if (window.innerWidth < 768) return;

    var cards = document.querySelectorAll('.svc-card');
    cards.forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var cx = rect.width / 2;
        var cy = rect.height / 2;
        var dx = (x - cx) / cx;
        var dy = (y - cy) / cy;
        card.style.transform = 'translateY(-10px) scale(1.02) rotateX(' + (-dy * 4) + 'deg) rotateY(' + (dx * 4) + 'deg)';
      });

      card.addEventListener('mouseleave', function() {
        card.style.transform = '';
      });
    });
  })();

  // ---- ANIMATED NUMBER IN HERO STATS ----
  (function() {
    var stats = document.querySelectorAll('.hero-stat .num');
    stats.forEach(function(el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(15px)';
      el.style.transition = 'all 0.5s ease';
      setTimeout(function() {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 1200 + i * 150);
    });
  })();

  // ---- HEADING WORD-BY-WORD ANIMATION ----
  (function() {
    var headings = document.querySelectorAll('.heading-title h2');
    headings.forEach(function(h) {
      var text = h.innerHTML;
      // Only animate plain text parts, not spans
      if (h.querySelectorAll('span').length === 0) {
        var words = text.trim().split(' ');
        h.innerHTML = words.map(function(w, i) {
          return '<span class="animated-word" style="display:inline-block;opacity:0;transform:translateY(20px);transition:all 0.4s ease ' + (i * 0.08) + 's;">' + w + '</span>';
        }).join(' ');

        var obs = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              h.querySelectorAll('.animated-word').forEach(function(span) {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
              });
              obs.disconnect();
            }
          });
        }, { threshold: 0.5 });

        obs.observe(h);
      }
    });
  })();

  // ---- TESTIMONIALS AUTO-SCROLL HINT ----
  (function() {
    var section = document.getElementById('our-testimonial');
    if (!section) return;

    var cards = section.querySelectorAll('.test-card');
    if (cards.length < 2) return;

    // Subtle pulsing glow alternation on stars
    cards.forEach(function(card, i) {
      var stars = card.querySelector('.stars');
      if (stars) {
        stars.style.animationDelay = (i * 0.7) + 's';
      }
    });
  })();

  // ---- PROCESS STEPS HOVER CONNECTOR LINE ----
  (function() {
    var steps = document.querySelectorAll('.process-wrapp li');
    steps.forEach(function(step, i) {
      step.addEventListener('mouseenter', function() {
        steps.forEach(function(s, j) {
          if (j <= i) {
            s.style.opacity = '1';
          } else {
            s.style.opacity = '0.5';
          }
        });
      });
      step.addEventListener('mouseleave', function() {
        steps.forEach(function(s) {
          s.style.opacity = '';
        });
      });
    });
  })();

  // ---- FORM LABEL ANIMATION ----
  (function() {
    var inputs = document.querySelectorAll('.form-control');
    inputs.forEach(function(input) {
      input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.01)';
        this.parentElement.style.transition = 'transform 0.3s ease';
      });
      input.addEventListener('blur', function() {
        this.parentElement.style.transform = '';
      });
    });
  })();

  // ---- TECH BADGE MAGNETIC HOVER ----
  (function() {
    if (window.innerWidth < 768) return;

    var badges = document.querySelectorAll('.tech-badge');
    badges.forEach(function(badge) {
      badge.addEventListener('mousemove', function(e) {
        var rect = badge.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        badge.style.transform = 'translateY(-4px) scale(1.05) translate(' + (x * 0.1) + 'px, ' + (y * 0.1) + 'px)';
      });
      badge.addEventListener('mouseleave', function() {
        badge.style.transform = '';
      });
    });
  })();

  // ---- SECTION FADE ON SCROLL (extra layer) ----
  (function() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
      var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.style.willChange = 'transform';
            setTimeout(function() {
              entry.target.style.willChange = 'auto';
            }, 1000);
          }
        });
      }, { threshold: 0.05 });
      obs.observe(section);
    });
  })();

  // ---- SMOOTH ANCHOR SCROLLING ----
  (function() {
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        var id = this.getAttribute('href').substring(1);
        var target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  })();

  // ---- FOOTER LOGO GLOW ----
  (function() {
    var footerLogo = document.querySelector('footer img');
    if (!footerLogo) return;

    footerLogo.style.transition = 'all 0.4s ease';
    footerLogo.addEventListener('mouseenter', function() {
      this.style.filter = 'brightness(1.1) drop-shadow(0 0 12px rgba(22,85,162,0.5))';
      this.style.transform = 'scale(1.05)';
    });
    footerLogo.addEventListener('mouseleave', function() {
      this.style.filter = '';
      this.style.transform = '';
    });
  })();

  // ---- TICKER PAUSE ON HOVER ----
  (function() {
    var ticker = document.querySelector('.ticker');
    if (!ticker) return;

    ticker.addEventListener('mouseenter', function() {
      ticker.style.animationPlayState = 'paused';
    });
    ticker.addEventListener('mouseleave', function() {
      ticker.style.animationPlayState = 'running';
    });
  })();

})();
