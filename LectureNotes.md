# JS Lecture Notes

---

> ## &rArr; 1) Loading Spinner

- Create closeSpinner Function ( hideen loading layer, show scroll)

  - by add class "page-content-loaded"

- DOMContentLoaded Event for document

  - Add DOMContentLoaded event to show page content and hide spinner after page is load without images loaded.
  - document.addEventListener('DOMContentLoaded', closeSpinner);

- load Event for window

  - Add load event to show page content and hide spinner when page content is fully load.
  - window.addEventListener('load', closeSpinner);

- [DOMContentLoaded VS load ](https://codepen.io/LukeAskew/pen/LnJsE)

---

> ## &rArr; 2) scrolToTop Element

- window.scrollY
- window.innerHeight

- window.scrollTo(0,0);

- window.scrollTo({
  behavior: 'smooth',
  top: '0',
  });

- document.querySelector('.hello').scrollIntoView({
  behavior: 'smooth'
  }); // Scroll to a certain element

- show or hidden to top buttom buy add / remove class "hidden"

// Note: There are Alternative way by using intersectionObserver to improve scrollong performance. (Search about it)

- [ How TO - Smooth Scroll by CSS TRICKS](https://css-tricks.com/snippets/jquery/smooth-scrolling/)

- [ How TO - Smooth Scroll by w3school](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp)

---

> ## &rArr; 3) Set current year

- new Date().getFullYear();
- yearElement.textContent = currentYear;

---

> ## &rArr; 4) Set gallery Modal

- Helper Function

  - closeModal (add hidden class)
  - openModal (add simage src ,then remove hidden class)

- Add click Handler to galleryItems

- handle close modal when close time & click backdrop
- stop propagate modalContent

[implementation-div-display-hide-with-animate](https://stackoverflow.com/questions/33956637javascript-native-implementation-div-display-hide-with-animate)

---

> ## &rArr; 5) Generate Random Quotes

- importing Quotes.
- Get random Quote
- destrucuting quote (info , author)
- btn click handler
- display Quote Function

---

> ## &rArr; 6) Generate Random Code

- codeCharacterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$@!';
- codeLenght = 6;
- Generate Code & Display it Function
- looping Array(codeLenght).fill(1)

---

> ## &rArr; 7) Tabs

- tabTitle ==> add active to clicked tabTitle & remove from previos tabTitle , get dataset.courseData.slice(-1) from tabTitle
- tabIinfo ==> add show direct tabInfo & remove from previos tabInfo.

> ## &rArr; 7) statistics

- isDone = false;
- stepsNum = 200;

- determine when need to start count (window.scrollY , secStatistics.offsetTop ,
  window.removeEventListener('scroll', CountUpNumbers))

- startCount Fun (ele) ==> get count num , calc step ,set interval timer , window.clearInterval(timerID))

> ## &rArr; 8) statistics tooltips

- select all tooltip
- add tooltip element item.insertAdjacentHTML(
  'beforeend',
  `<span class="tooltip__info">${item.dataset.tooltipInfo}</span>`
  );

> ## &rArr; 9) Sticky navbar

- determine threshold to sticky nav (add/remove sticky class)

---

> ## &rArr; What's RGEX?
>
> - RGEX is help us to work with strings
> - it's used to search in pattern in string

Example:

```js
const userInput = 'testtest.com';

if (userInput.includes('@'))    // But also must include .
if (userInput.includes('.'))   // but also must include .com

```

> ## &rArr; How to create a RGEX in JS?
>
> - Ther are to ways to create RGEX in jS

## Way1:

```js
const regex = new RegExp(''); //By using constructor function.
const Emailregex = /^\S+@\S+\.\S+$/; //By using constructor function.
regex.test('test@test.com');

^\S ==> any kind of word
+@ => some where at a string I have A symbole @
\S  => then any kind of a word after @
\.  => then character .
\S  ==> any Kind of a word after . be at last
// By using letterial notation.
```

> - RGEX is help us to work with strings
> - it's used to search in pattern in string

```js
let userEmailInput = 'test.@testcom';
// console.log(userEmailInput.includes('@') && userEmailInput.includes('.'));

// const emailRegex = new RegExp(/^\S+@\S+\.\S+$/);
const emailRegex = /^\S+@\S+\.\S+$/;
console.log(emailRegex.test('test@test.com'));

userEmailInput = 'test.@testcom';
// console.log(userEmailInput.includes('@') && userEmailInput.includes('.'));

const reg1 = /hello/;
console.log(reg1.test('hello'));
console.log(reg1.test('my name is amr, hello'));
console.log(reg1.test('Hello'));
// If you want to find where my search patern start to match in string
console.log(reg1.exec('my name is amr, hello'));
console.log('my name is amr, hello'.match(reg1));
console.log('my name is amr, hello'.indexOf('h'));

const reg2 = /(h|H)ello/;
console.log(reg2.test('hello'));
console.log(reg2.test('Hello'));
console.log(reg2.test('my name is amr, Hello'));
console.log(reg2.test('my name is amr, H ello'));
console.log(reg2.test('my name is amr, H-ello'));

const reg3 = /.ello/;
console.log(reg3.test('hello'));
console.log(reg3.test('mello'));
console.log(reg3.test('pello'));
console.log(reg3.test('_ello'));

const emailRegex = /^\S+@\S+\.\S+$/;
console.log(emailRegex.test('test@test.com'));

// go to google Email JS Regex
// go to google url JS Regex
```

[RegEXP By Max](https://www.youtube.com/playlist?list=PL55RiY5tL51ryV3MhCbH8bLl7O_RZGUUE)
[RegEXP By Osama Mastering Python 95 -102](https://www.youtube.com/playlist?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs)
[Mastering Regular Expressions in JavaScript By Steven Hancock](https://www.udemy.com/course/mastering-regular-expressions-in-javascript/)
