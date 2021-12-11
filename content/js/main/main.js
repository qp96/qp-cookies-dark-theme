const quotes = [
  {
    text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    author: 'Thomas Edison',
  },
  {
    text: 'You can observe a lot just by watching.',
    author: 'Yogi Berra',
  },
  {
    text: 'A house divided against itself cannot stand.',
    author: 'Abraham Lincoln',
  },
  {
    text: 'Difficulties increase the nearer we get to the goal.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Fate is in your hands and no one elses',
    author: 'Byron Pulsifer',
  },
  {
    text: 'Be the chief but never the lord.',
    author: 'Lao Tzu',
  },
  {
    text: 'Nothing happens unless first we dream.',
    author: 'Carl Sandburg',
  },
  {
    text: 'Well begun is half done.',
    author: 'Aristotle',
  },
  {
    text: 'Life is a learning experience, only if you learn.',
    author: 'Yogi Berra',
  },
  {
    text: 'Self-complacency is fatal to progress.',
    author: 'Margaret Sangster',
  },
  {
    text: 'Peace comes from within. Do not seek it without.',
    author: 'Buddha',
  },
  {
    text: 'What you give is what you get.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'We can only learn to love by loving.',
    author: 'Iris Murdoch',
  },
  {
    text: 'Life is change. Growth is optional. Choose wisely.',
    author: 'Karen Clark',
  },
  {
    text: "You'll see it when you believe it.",
    author: 'Wayne Dyer',
  },
  {
    text: 'Today is the tomorrow we worried about yesterday.',
    author: 'anonymous person.',
  },
  {
    text: "It's easier to see the mistakes on someone else's paper.",
    author: 'anonymous person.',
  },
  {
    text: 'Every man dies. Not every man really lives.',
    author: 'anonymous person.',
  },
  {
    text: 'To lead people walk behind them.',
    author: 'Lao Tzu',
  },
  {
    text: 'Having nothing, nothing can he lose.',
    author: 'William Shakespeare',
  },
  {
    text: 'Trouble is only opportunity in work clothes.',
    author: 'Henry J. Kaiser',
  },
  {
    text: 'A rolling stone gathers no moss.',
    author: 'Publilius Syrus',
  },
  {
    text: 'Ideas are the beginning points of all fortunes.',
    author: 'Napoleon Hill',
  },
  {
    text: 'Everything in life is luck.',
    author: 'Donald Trump',
  },
  {
    text: 'Doing nothing is better than being busy doing nothing.',
    author: 'Lao Tzu',
  },
  {
    text: 'Trust yourself. You know more than you think you do.',
    author: 'Benjamin Spock',
  },
  {
    text: 'Study the past, if you would divine the future.',
    author: 'Confucius',
  },
  {
    text: 'The day is already blessed, find peace within it.',
    author: 'anonymous person.',
  },
  {
    text: 'From error to error one discovers the entire truth.',
    author: 'Sigmund Freud',
  },
  {
    text: 'Well done is better than well said.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'Bite off more than you can chew, then chew it.',
    author: 'Ella Williams',
  },
  {
    text: 'Work out your own salvation. Do not depend on others.',
    author: 'Buddha',
  },
  {
    text: 'One today is worth two tomorrows.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'Once you choose hope, anythings possible.',
    author: 'Christopher Reeve',
  },
  {
    text: 'God always takes the simplest way.',
    author: 'Albert Einstein',
  },
  {
    text: 'One fails forward toward success.',
    author: 'Charles Kettering',
  },
  {
    text: 'From small beginnings come great things.',
    author: 'anonymous person.',
  },
  {
    text: 'Learning is a treasure that will follow its owner everywhere',
    author: 'Chinese proverb',
  },
  {
    text: 'Be as you wish to seem.',
    author: 'Socrates',
  },
  {
    text: 'The world is always in movement.',
    author: 'V. Naipaul',
  },
  {
    text: 'Never mistake activity for achievement.',
    author: 'John Wooden',
  },
  {
    text: 'What worries you masters you.',
    author: 'Haddon Robinson',
  },
  {
    text: 'One faces the future with ones past.',
    author: 'Pearl Buck',
  },
  {
    text: 'Goals are the fuel in the furnace of achievement.',
    author: 'Brian Tracy',
  },
  {
    text: 'Who sows virtue reaps honour.',
    author: 'Leonardo da Vinci',
  },
  {
    text: 'Be kind whenever possible. It is always possible.',
    author: 'Dalai Lama',
  },
  {
    text: "Talk doesn't cook rice.",
    author: 'Chinese proverb',
  },
  {
    text: 'He is able who thinks he is able.',
    author: 'Buddha',
  },
  {
    text: 'A goal without a plan is just a wish.',
    author: 'Larry Elder',
  },
  {
    text: 'To succeed, we must first believe that we can.',
    author: 'Michael Korda',
  },
  {
    text: 'Learn from yesterday, live for today, hope for tomorrow.',
    author: 'Albert Einstein',
  },
  {
    text: 'A weed is no more than a flower in disguise.',
    author: 'James Lowell',
  },
  {
    text: 'Do, or do not. There is no try.',
    author: 'Yoda',
  },
  {
    text: 'All serious daring starts from within.',
    author: 'Harriet Beecher Stowe',
  },
  {
    text: 'The best teacher is experience learned from failures.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'Think how hard physics would be if particles could think.',
    author: 'Murray Gell-Mann',
  },
  {
    text: "Love is the flower you've got to let grow.",
    author: 'John Lennon',
  },
  {
    text: "Don't wait. The time will never be just right.",
    author: 'Napoleon Hill',
  },
  {
    text: 'Time is the wisest counsellor of all.',
    author: 'Pericles',
  },
  {
    text: 'You give before you get.',
    author: 'Napoleon Hill',
  },
  {
    text: 'Wisdom begins in wonder.',
    author: 'Socrates',
  },
  {
    text: 'Without courage, wisdom bears no fruit.',
    author: 'Baltasar Gracian',
  },
  {
    text: 'Change in all things is sweet.',
    author: 'Aristotle',
  },
  {
    text: 'What you fear is that which requires action to overcome.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'When performance exceeds ambition, the overlap is called success.',
    author: 'Cullen Hightower',
  },
  {
    text: 'When deeds speak, words are nothing.',
    author: 'African proverb',
  },
  {
    text: 'Real magic in relationships means an absence of judgement of others.',
    author: 'Wayne Dyer',
  },
  {
    text: 'I never think of the future. It comes soon enough.',
    author: 'Albert Einstein',
  },
  {
    text: 'Skill to do comes of doing.',
    author: 'Ralph Emerson',
  },
  {
    text: 'Wisdom is the supreme part of happiness.',
    author: 'Sophocles',
  },
  {
    text: 'I believe that every person is born with talent.',
    author: 'Maya Angelou',
  },
  {
    text: 'Important principles may, and must, be inflexible.',
    author: 'Abraham Lincoln',
  },
  {
    text: 'The undertaking of a new action brings new strength.',
    author: 'Richard Evans',
  },
  {
    text: 'The years teach much which the days never know.',
    author: 'Ralph Emerson',
  },
  {
    text: 'Our distrust is very expensive.',
    author: 'Ralph Emerson',
  },
  {
    text: 'All know the way; few actually walk it.',
    author: 'Bodhidharma',
  },
  {
    text: 'Great talent finds happiness in execution.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Faith in oneself is the best and safest course.',
    author: 'Michelangelo',
  },
  {
    text: 'Courage is going from failure to failure without losing enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    text: 'The two most powerful warriors are patience and time.',
    author: 'Leo Tolstoy',
  },
  {
    text: 'Anticipate the difficult by managing the easy.',
    author: 'Lao Tzu',
  },
  {
    text: 'Those who are free of resentful thoughts surely find peace.',
    author: 'Buddha',
  },
  {
    text: 'A short saying often contains much wisdom.',
    author: 'Sophocles',
  },
  {
    text: 'It takes both sunshine and rain to make a rainbow.',
    author: 'anonymous person.',
  },
  {
    text: 'A beautiful thing is never perfect.',
    author: 'anonymous person.',
  },
  {
    text: 'Only do what your heart tells you.',
    author: 'Princess Diana',
  },
  {
    text: 'Life is movement-we breathe, we eat, we walk, we move!',
    author: 'John Pierrakos',
  },
  {
    text: 'No one can make you feel inferior without your consent.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'Argue for your limitations, and sure enough theyre yours.',
    author: 'Richard Bach',
  },
  {
    text: 'Luck is what happens when preparation meets opportunity.',
    author: 'Seneca',
  },
  {
    text: 'Victory belongs to the most persevering.',
    author: 'Napoleon Bonaparte',
  },
  {
    text: 'Love all, trust a few, do wrong to none.',
    author: 'William Shakespeare',
  },
  {
    text: 'In order to win, you must expect to win.',
    author: 'Richard Bach',
  },
  {
    text: 'A goal is a dream with a deadline.',
    author: 'Napoleon Hill',
  },
  {
    text: 'You can do it if you believe you can!',
    author: 'Napoleon Hill',
  },
  {
    text: "Set your goals high, and don't stop till you get there.",
    author: 'Bo Jackson',
  },
  {
    text: 'Every new day is another chance to change your life.',
    author: 'anonymous person.',
  },
  {
    text: 'Smile, breathe, and go slowly.',
    author: 'Thich Nhat Hanh',
  },
  {
    text: 'Nobody will believe in you unless you believe in yourself.',
    author: 'Liberace',
  },
  {
    text: 'Do more than dream: work.',
    author: 'William Arthur Ward',
  },
  {
    text: 'No man was ever wise by chance.',
    author: 'Seneca',
  },
  {
    text: 'Some pursue happiness, others create it.',
    author: 'anonymous person.',
  },
  {
    text: 'He that is giddy thinks the world turns round.',
    author: 'William Shakespeare',
  },
  {
    text: "Don't ruin the present with the ruined past.",
    author: 'Ellen Gilchrist',
  },
  {
    text: 'Do something wonderful, people may imitate it.',
    author: 'Albert Schweitzer',
  },
  {
    text: 'We do what we do because we believe.',
    author: 'anonymous person.',
  },
  {
    text: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'If you cannot be silent be brilliant and thoughtful.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'Who looks outside, dreams; who looks inside, awakes.',
    author: 'Carl Jung',
  },
  {
    text: 'What we think, we become.',
    author: 'Buddha',
  },
  {
    text: 'The shortest answer is doing.',
    author: 'Lord Herbert',
  },
  {
    text: 'All our knowledge has its origins in our perceptions.',
    author: 'Leonardo da Vinci',
  },
  {
    text: 'The harder you fall, the higher you bounce.',
    author: 'anonymous person.',
  },
  {
    text: 'Trusting our intuition often saves us from disaster.',
    author: 'Anne Wilson Schaef',
  },
  {
    text: 'Truth is powerful and it prevails.',
    author: 'Sojourner Truth',
  },
  {
    text: 'Light tomorrow with today!',
    author: 'Elizabeth Browning',
  },
  {
    text: 'Silence is a fence around wisdom.',
    author: 'German proverb',
  },
  {
    text: 'Society develops wit, but its contemplation alone forms genius.',
    author: 'Madame de Stael',
  },
  {
    text: 'The simplest things are often the truest.',
    author: 'Richard Bach',
  },
  {
    text: 'Everyone smiles in the same language.',
    author: 'anonymous person.',
  },
  {
    text: 'Yesterday I dared to struggle. Today I dare to win.',
    author: 'Bernadette Devlin',
  },
  {
    text: 'No alibi will save you from accepting the responsibility.',
    author: 'Napoleon Hill',
  },
  {
    text: 'If you can dream it, you can do it.',
    author: 'Walt Disney',
  },
  {
    text: 'It is better to travel well than to arrive.',
    author: 'Buddha',
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: 'Anais Nin',
  },
  {
    text: 'You have to believe in yourself.',
    author: 'Sun Tzu',
  },
  {
    text: 'Our intention creates our reality.',
    author: 'Wayne Dyer',
  },
  {
    text: 'Silence is a true friend who never betrays.',
    author: 'Confucius',
  },
  {
    text: 'Character develops itself in the stream of life.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'From little acorns mighty oaks do grow.',
    author: 'American proverb',
  },
  {
    text: "You can't stop the waves, but you can learn to surf.",
    author: 'Jon Kabat-Zinn',
  },
  {
    text: 'Reality does not conform to the ideal, but confirms it.',
    author: 'Gustave Flaubert',
  },
  {
    text: 'Speak low, if you speak love.',
    author: 'William Shakespeare',
  },
  {
    text: 'A really great talent finds its happiness in execution.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Reality leaves a lot to the imagination.',
    author: 'John Lennon',
  },
  {
    text: 'The greatest remedy for anger is delay.',
    author: 'Seneca',
  },
  {
    text: 'Growth itself contains the germ of happiness.',
    author: 'Pearl Buck',
  },
  {
    text: "You can do what's reasonable or you can decide what's possible.",
    author: 'anonymous person.',
  },
];


// #region  Loading Spinner
const body = window.document.querySelector('body');

const closeSpinner = () => body.classList.add('page-content-loaded');

// Add DOMContentLoaded event to show page content and hide spinner after page is load without images loaded.
document.addEventListener('DOMContentLoaded', closeSpinner);

// Add load event to show page content and hide spinner when page content is fully load.
// window.addEventListener('load', closeSpinner);

// Reference =>  https://codepen.io/LukeAskew/pen/LnJsE
// #endregion

// #region  Checking Internet Connection Status
(function () {
  // Chaching needed Dom Elements
  const internetNotify = window.document.querySelector('.internet-notify');
  let btnReload = window.document.querySelector('.internet-notify__reload-btn');

  let isNotifyShow = false;

  // Helper Variables to store html content of internet notify in off & on
  const disableHtmlContent = `
                  <span class="fa-stack fa-2x">
                  <i class="fas fa-wifi fa-stack-1x text-secondary"></i>
                  <i class="fas fa-ban fa-stack-2x" style="color: Tomato"></i>
                  </span>

                  <p class="internet-notify__text">You are Currently offline.</p>

                  <button class="internet-notify__reload-btn btn">Refress</button>
                `;

  const enableHtmlContent = `
                  <i class="internet-notify__icon fas fa-wifi fs-4"></i>
                  <p class="internet-notify__text">Internet connection was restored.</p>
                `;

  const hideNotify = () => {
    internetNotify.classList.add('hidden');
    isNotifyShow = false;
  };

  const showNotify = (notifyStatus) => {
    isNotifyShow = true;

    window.console.log(
      notifyStatus === 'on'
        ? "✔ Network is on Now, let's start continue your work"
        : '❌ Network is off Now, please check connection.'
    );

    internetNotify.innerHTML =
      notifyStatus === 'on' ? enableHtmlContent : disableHtmlContent;
    internetNotify.classList.remove('hidden');

    if (notifyStatus === 'off') {
      btnReload = window.document.querySelector('.internet-notify__reload-btn');

      btnReload.addEventListener('click', () => {
        window.location.reload();
      });
    }

    setTimeout(hideNotify, 5000);
  };

  const notifyHandler = (notifyStatus) => {
    if (isNotifyShow) {
      setTimeout(() => showNotify(notifyStatus), 6000);
    } else {
      showNotify(notifyStatus);
    }
  };

  // Add Event offline to handle internet notify incase be offline
  window.addEventListener('offline', () => notifyHandler('off'));

  // Add Event online to handle internet notify incase be online.
  window.addEventListener('online', () => notifyHandler('on'));
})();

// note:  window.navigator.onLine  ==> true or false
// https://www.freecodecamp.org/news/how-to-check-internet-connection-status-with-javascript/

// window.location.reload(); // window.location.reload(false);
// window.history.go(0);

// // Add click event to btnPageForceReload button to Hard reload page. (deprecated in some browsers)
// window.location.reload(true);
// window.location.href = window.location.href;

// // https://stackoverflow.com/questions/22841312/full-refresh-of-page-ctrlf5/22841435
// // https://css-tricks.com/strategies-for-cache-busting-css/
// // https://code-boxx.com/force-browsers-reload-javascript-css/
// #endregion

// #region  scrolToTop Element
const scrolToTop = window.document.querySelector('.scrol-to-top');

scrolToTop.addEventListener('click', () => {
  window.scrollTo({
    behavior: 'smooth',
    top: '0',
  });
});

window.addEventListener('scroll', () => {
  // window.console.log(window.scrollY > window.innerHeight);

  if (window.scrollY > window.innerHeight) {
    // window.console.log('yes');
    scrolToTop.classList.remove('hidden');
  } else {
    scrolToTop.classList.add('hidden');
  }
});

// Note: There are Alternative way by using intersectionObserver to improve scrollong performance. (Search about it)
// #endregion

// #region  set current year
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('.current-year');
// console.log(yearElements);

yearElements.forEach((yearElement) => {
  yearElement.textContent = currentYear;
});
// #endregion

// #region  Gallery Modal
const galleryItems = window.document.querySelectorAll('.gallery__item');
const modalBackdrop = window.document.querySelector('.modal__backdrop');
const modalContent = window.document.querySelector('.modal__content');
const modalContentImg = window.document.querySelector('.modal__content__img');
const modalCloseIconContainer = window.document.querySelector(
  '.modal__content__close-icon-container'
);

// Helper Function
const closeModal = () => {
  modalBackdrop.classList.add('hidden');
};

const openModal = (imgSrc) => {
  modalContentImg.setAttribute('src', imgSrc);
  modalBackdrop.classList.remove('hidden');
};

galleryItems.forEach((galleryItem) => {
  const itemImg = galleryItem.querySelector('.gallery__item__img');
  galleryItem.addEventListener('click', (e) => {
    const imageScr = itemImg.getAttribute('src');
    // console.log(imageScr);
    openModal(imageScr);
  });
});

// Add click event to myModalBackdrop to close when click on it
modalBackdrop.addEventListener('click', closeModal);

// Add click event to myModal to stop propagation  to avoid close modal when click on it
modalContent.addEventListener('click', (e) => e.stopPropagation());

// Add click event to myModalCloseIconContainer to close modal when click on it
modalCloseIconContainer.addEventListener('click', closeModal);

// https://stackoverflow.com/questions/33956637/javascript-native-implementation-div-display-hide-with-animate
// https://jsfiddle.net/zmirko/fzn1rs0k/
// #endregion

// #region Quotes

const generateQuoteInfo = window.document.querySelector(
  '.generate__quote__info'
);
const generateQuoteAuthor = window.document.querySelector(
  '.generate__quote__author'
);
const generateQuoteBtn = window.document.querySelector('.generate__quote__btn');

const generateQuote = () => {
  const quote = quotes[Math.trunc(Math.random() * quotes.length)];
  // console.log(quote);
  const { text, author } = quote;
  generateQuoteInfo.textContent = text;
  generateQuoteAuthor.textContent = author;
};

generateQuoteBtn.addEventListener('click', generateQuote);

// #endregion

// #region Generate Random Code
const generateCodeInfo = window.document.querySelector('.generate__code__info');
const generateCodebtn = window.document.querySelector('.generate__code__btn');
const codeCharacterSet =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$@!';

const codeLenght = 6;

const generateCode = () => {
  let code = '';

  // for (let i = 0; i < codeLenght; i++) {
  //   code +=
  //     codeCharacterSet[Math.trunc(Math.random() * codeCharacterSet.length)];
  // }

  Array(codeLenght)
    .fill(1)
    .forEach(
      () =>
        (code +=
          codeCharacterSet[Math.trunc(Math.random() * codeCharacterSet.length)])
    );

  generateCodeInfo.textContent = code;
};

generateCodebtn.addEventListener('click', generateCode);
// #endregion

// #region Tabs

const coursesTitlesList = window.document.querySelector(
  '.courses__titles-list'
);

const coursesDataListItems = window.document.querySelectorAll(
  '.courses__data-list__item'
);

let curentCoursesTitlesListItem = window.document.querySelector(
  '.courses__titles-list__item.active'
);

let curentCoursesDataListItem = window.document.querySelector(
  '.courses__data-list__item.show'
);

coursesTitlesList.addEventListener('click', (e) => {
  // console.log(e.target);

  if (e.target.classList.contains('courses__titles-list__item')) {
    curentCoursesTitlesListItem.classList.remove('active');
    curentCoursesTitlesListItem = e.target;
    e.target.classList.add('active');

    curentCoursesDataListItem.classList.remove('show');
    curentCoursesDataListItem =
      coursesDataListItems[
        Number(curentCoursesTitlesListItem.dataset.courseData.slice(-1)) - 1
      ];
    curentCoursesDataListItem.classList.add('show');
  }
});

// #endregion

// #region statistics
const secStatistics = window.document.querySelector('.sec--statistics');
const statisticsItems = window.document.querySelectorAll(
  '.statistics__item__number'
);

let isDone = false;
const stepsNum = 200;

function startCount(el) {
  const countNumber = Number(el.dataset.toNumber);
  // console.log(countNumber);

  const stepsValue = Math.trunc(countNumber / stepsNum);

  const timerID = window.setInterval((e) => {
    el.textContent = Number(el.textContent) + stepsValue;
    if (Number(el.textContent) >= countNumber) {
      window.clearInterval(timerID);
    }
  }, 5);
}

function CountUpNumbers() {
  if (window.scrollY > secStatistics.offsetTop - 200) {
    // console.log(window.scrollY);

    isDone = true;
    window.removeEventListener('scroll', CountUpNumbers);

    statisticsItems.forEach((item) => {
      startCount(item);
    });
  }
}

window.addEventListener('scroll', CountUpNumbers);
// #endregion

// #region tooltips
const tooltips = window.document.querySelectorAll('.tooltip');
// console.log('tooltips => ', tooltips);

tooltips.forEach((item) => {
  item.insertAdjacentHTML(
    'beforeend',
    `<span class="tooltip__info">${item.dataset.tooltipInfo}</span>`
  );
});
// #endregion

// #region navbar toggle
const mainNavList = window.document.querySelector('.main-nav__list');
const mainNavModeBtn = window.document.querySelector(
  '.main-nav__list__item__mode-btn'
);
const mainNavToggleBtn = window.document.querySelector('.main-nav__toggle-btn');
const CurrentMode = localStorage.getItem('pageMode');


mainNavToggleBtn.addEventListener('click', (_) => {
  mainNavList.classList.toggle('show');

  const navBarIcon = window.document.querySelector('.fa-bars');
  const timesNavIcon = window.document.querySelector('.fa-times-circle');


  if (mainNavList.classList.contains('show')) {
    navBarIcon.style.display = 'none';
    timesNavIcon.style.display = 'block';
  } else {
    navBarIcon.style.display = 'block';
    timesNavIcon.style.display = 'none';
  }
});
// #endregion

// #region Sticky navbar
const header = window.document.querySelector('.header');
const MY_WINDOW_HEIGHT = window.innerHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > MY_WINDOW_HEIGHT) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});


// #endregion

// #region Smooth scrolling animation
const navLinks = document.querySelectorAll('.main-nav__list__item__link');

navLinks.forEach((link) => {


  link.addEventListener('click', (e) => {
    e.preventDefault();

    const navBarIcon = window.document.querySelector('.fa-bars');
    const timesNavIcon = window.document.querySelector('.fa-times-circle');

    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile naviagtion
    if (mainNavList.classList.contains('show')) {
      mainNavList.classList.remove('show');
      navBarIcon.style.display = 'block';
      timesNavIcon.style.display = 'none';

    } else {
      mainNavList.classList.add('show');
      navBarIcon.style.display = 'none';
      timesNavIcon.style.display = 'block';
    }
  });
});
// #endregion

// #region Dark & light Mode and save mode in local Storage

function pushThemeToLocalStorage(pageTheme) {
  localStorage.setItem('pageTheme', pageTheme);
}

function popThemeFromLocalStorage() {
  return localStorage.getItem('pageTheme');
}

let currentPageTheme = popThemeFromLocalStorage();

if (currentPageTheme) {
  document.documentElement.className = currentPageTheme;
} else {
  currentPageTheme = 'light-theme';
}

mainNavModeBtn.addEventListener('click', (e) => {

  currentPageTheme =
    currentPageTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
  document.documentElement.className = currentPageTheme;
  pushThemeToLocalStorage(currentPageTheme);
});
// #endregion
