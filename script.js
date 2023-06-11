  // Initialize ScrollMagic controller
  var controller = new ScrollMagic.Controller();

  // Create ScrollMagic scene for each section
  var sections = document.querySelectorAll('section');
  sections.forEach(function (section, index) {
    var direction = index % 2 === 0 ? 'up' : 'down';
    new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.5,
        reverse: true
      })
      .setTween(TweenMax.from(section, 1, {
        opacity: 0,
        y: direction === 'up' ? '100px' : '-100px',
        ease: Power1.easeOut
      }))
      .addTo(controller);
  });

  // Initialize AOS (Animate On Scroll)
  AOS.init();