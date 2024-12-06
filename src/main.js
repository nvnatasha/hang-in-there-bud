// query selector variables go here 👇
let mainPoster = document.querySelector('.main-poster')
let imageURL = document.querySelector('#poster-img')
let title = document.querySelector('#poster-title')
let quote = document.querySelector('#poster-quote')
let poster = document.querySelector('.poster')
let showRandom = document.querySelector('.show-random')
let createOwn = document.querySelector('.show-form')
let showSaved = document.querySelector('.show-saved')
let showMain = document.querySelector('.show-main')
let backToMain = document.querySelector('.back-to-main')
let userImage = document.querySelector('#user-image-url')
let userTitle = document.querySelector('#user-poster-title')
let userQuote = document.querySelector('#user-poster-quote')
let OwnPosterForm = document.querySelector('.poster-form')
let showSavedPosters = document.querySelector('.saved-posters')
let pageViews = document.querySelectorAll('section')
let userPoster = document.querySelector('.make-poster')
let savePosterButton = document.querySelector('.save-poster')
let savedPostersGrid = document.querySelector('.saved-posters-grid')



// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
window.addEventListener('load', createRandomPoster)
showRandom.addEventListener('click', createRandomPoster)
createOwn.addEventListener('click', () => {
  switchPages(OwnPosterForm)
})
savePosterButton.addEventListener('click', savePoster)
showMain.addEventListener('click', () => {
  switchPages(mainPoster)
})
backToMain.addEventListener('click', () => {
  switchPages(mainPoster)
})
showSaved.addEventListener('click', showSavedPostersHandler)

userPoster.addEventListener('click', userPosterButton)
savePosterButton.addEventListener('click', savePoster)



// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

let randomImage;
let randomTitle;
let randomQuote;

function randomize() {
  randomImage = images[getRandomIndex(images)]
  randomTitle = titles[getRandomIndex(titles)]
  randomQuote = quotes[getRandomIndex(quotes)]
}

function createRandomPoster() {
  randomize()
  let randomPoster = createPoster(randomImage, randomTitle, randomQuote)

  imageURL.src = randomPoster.imageURL
  title.innerText = randomPoster.title
  quote.innerText = randomPoster.quote

  currentPoster = randomPoster
}

function switchPages(showPage) {
  pageViews.forEach((page) =>{
    page.classList.add('hidden')
  })
  showPage.classList.remove('hidden')
}

function createUserPoster() {

  imageURL.src = userImage.value
  title.innerText = userTitle.value
  quote.innerText = userQuote.value
  
  currentPoster = createPoster(userImage.value, userTitle.value, userQuote.value)  
}

function userPosterButton(event) {
  event.preventDefault()

  createUserPoster()
  switchPages(mainPoster)
}

function savePoster() {
  console.log('current:', currentPoster)
  if (currentPoster) {
    let duplicate = false

    savedPosters.forEach((poster) =>{
      if (poster.id === currentPoster.id){
        duplicate = true
      }
    })
    if (!duplicate){
      savedPosters.push(currentPoster)

      displaySavedPosters()
    }
  }
}

function displaySavedPosters() {
  savedPostersGrid.innerHTML = ''
  console.log('saved:', savedPosters)
  savedPosters.forEach((poster) =>{
    let smallPoster = document.createElement('div')
    smallPoster.className = 'mini-poster'
    
    smallPoster.innerHTML = `
    <img src="${poster.imageURL}" alt="Poster Image">
    <h2>${poster.title}</h2>
    <h4>${poster.quote}</h4>
    `
    savedPostersGrid.appendChild(smallPoster)
  })
}

function showSavedPostersHandler() {
  
  displaySavedPosters()
  switchPages(showSavedPosters)
}

