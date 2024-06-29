// scripts.js
function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.nav-menu');
  menuIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
}



document.addEventListener('DOMContentLoaded', (event) => {
  const checkbox = document.querySelector('.theme-switch__checkbox');

  // Load the saved theme from local storage
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    checkbox.checked = currentTheme === 'dark-mode';
  }

  // Listen for the checkbox state change
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      document.body.classList.replace('light-mode', 'dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      document.body.classList.replace('dark-mode', 'light-mode');
      localStorage.setItem('theme', 'light-mode');
    }
  });
});



// document.addEventListener('DOMContentLoaded', function () {
//   const typingElement = document.querySelector('.typing', 'typing-2');
//   const cursorElement = document.querySelector('.cursor');
//   const phrases = ["Frot end developer", "Designer", "Fresher", "Editor", ];
//   let currentPhraseIndex = 0;
//   let currentLetterIndex = 0;

//   function type() {
//       cursorElement.classList.remove('blink'); 
//       const currentPhrase = phrases[currentPhraseIndex];
//       if (currentLetterIndex < currentPhrase.length) {
//           typingElement.textContent += currentPhrase.charAt(currentLetterIndex);
//           currentLetterIndex++;
//           setTimeout(type, 200); 
//       } else {
//           cursorElement.classList.add('blink'); 
//           setTimeout(erase, 2000); 
//       }
//   }

//   function erase() {
//       cursorElement.classList.remove('blink')
//       if (currentLetterIndex > 0) {
//           typingElement.textContent = typingElement.textContent.substring(0, currentLetterIndex - 1);
//           currentLetterIndex--;
//           setTimeout(erase, 100); 
//       } else {
//           currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
//           setTimeout(type, 500); 
//       }
//   }

//   type();
// });


document.addEventListener('DOMContentLoaded', function () {
    function initTypingEffect(typingElement, cursorElement, phrases) {
        let currentPhraseIndex = 0;
        let currentLetterIndex = 0;

        function type() {
            cursorElement.classList.remove('blink');
            const currentPhrase = phrases[currentPhraseIndex];
            if (currentLetterIndex < currentPhrase.length) {
                typingElement.textContent += currentPhrase.charAt(currentLetterIndex);
                currentLetterIndex++;
                setTimeout(type, 200);
            } else {
                cursorElement.classList.add('blink');
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            cursorElement.classList.remove('blink');
            if (currentLetterIndex > 0) {
                typingElement.textContent = typingElement.textContent.substring(0, currentLetterIndex - 1);
                currentLetterIndex--;
                setTimeout(erase, 100);
            } else {
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
            }
        }

        type();
    }

    const typingElements = [
        { element: document.querySelector('.typing'), cursor: document.querySelector('.cursor'), phrases: ["Front end developer", "Designer", "Fresher", "Editor"] },
        { element: document.querySelector('.typing-2'), cursor: document.querySelector('.cursor-2'), phrases: ["Web Developer", "Enthusiastic Learner", "Team Player", "Problem Solver"] },
        { element: document.querySelector('.typing-3'), cursor: document.querySelector('.cursor-3'), phrases: ["Connect with me on :)"] }
    ];

    typingElements.forEach(item => {
        if (item.element && item.cursor) {
            initTypingEffect(item.element, item.cursor, item.phrases);
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelector('.slides');
  const slide = document.querySelectorAll('.slide');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  const pagination = document.querySelector('.pagination');

  let currentIndex = 0;
  let slideInterval;

  // Create pagination bullets
  slide.forEach((_, index) => {
      const bullet = document.createElement('div');
      bullet.classList.add('bullet');
      if (index === currentIndex) bullet.classList.add('active');
      bullet.addEventListener('click', () => {
          currentIndex = index;
          updateSlidePosition();
          updatePagination();
          resetInterval();
      });
      pagination.appendChild(bullet);
  });

  const bullets = document.querySelectorAll('.bullet');

  function updateSlidePosition() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function updatePagination() {
      bullets.forEach((bullet, index) => {
          if (index === currentIndex) {
              bullet.classList.add('active');
          } else {
              bullet.classList.remove('active');
          }
      });
  }

  function moveToNextSlide() {
      if (currentIndex < slide.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      updateSlidePosition();
      updatePagination();
  }

  function moveToPrevSlide() {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = slide.length - 1;
      }
      updateSlidePosition();
      updatePagination();
  }

  next.addEventListener('click', function() {
      moveToNextSlide();
      resetInterval();
  });

  prev.addEventListener('click', function() {
      moveToPrevSlide();
      resetInterval();
  });

  function startSlideShow() {
      slideInterval = setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds
  }

  function resetInterval() {
      clearInterval(slideInterval);
      startSlideShow();
  }

  startSlideShow();
});
