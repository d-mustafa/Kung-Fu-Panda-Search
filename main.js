// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImgEl = document.getElementById("char-img");
let bodyEl = document.getElementById("the-body");
let divEl = document.getElementById("div");

// Button Event Listener
let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", searchBtnClicked);
let themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", themeBtnClicked);

function searchBtnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  // If Statement
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior.";
    charImgEl.src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    charImgEl.src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the bug!";
    charImgEl.src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We should hang out!";
    charImgEl.src = "img/monkey.png";
  } else if (name === "viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight!";
    charImgEl.src = "img/viper.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Wings of Justice!";
    charImgEl.src = "img/crane.png";
  } else if (name === "boss wolf") {
    charNameEl.innerHTML = "Boss Wolf";
    charQuoteEl.innerHTML =
      "Guess nobody told you: If you mess with the wolf, you get the fangs.";
    charImgEl.src = "img/boss-wolf.png";
  } else if (name === "croc") {
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "Vengeance is served!";
    charImgEl.src = "img/croc.png";
  } else if (name === "kai") {
    charNameEl.innerHTML = "Kai";
    charQuoteEl.innerHTML =
      "I fought by his side. I loved him like a brother. And he... betrayed me. Well, now I will destroy everything he has created!";
    charImgEl.src = "img/kai.png";
  } else if (name === "mr ping") {
    charNameEl.innerHTML = "Mr Ping";
    charQuoteEl.innerHTML = "We are noodle folk. Broth runs through our veins!";
    charImgEl.src = "img/mr-ping.png";
  } else if (name === "oogway" || name === "master oogway") {
    charNameEl.innerHTML = "Oogway";
    charQuoteEl.innerHTML =
      "You are too concerned with what was and what will be. There's a saying: Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.";
    charImgEl.src = "img/oogway.png";
  } else if (name === "shen") {
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML = "Happiness... must be taken. And I will take mine.";
    charImgEl.src = "img/shen.png";
  } else if (name === "shifu") {
    charNameEl.innerHTML = "Shifu";
    charQuoteEl.innerHTML =
      "If you only do what you can do, you will never be more than you are now.";
    charImgEl.src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charNameEl.innerHTML = "Soothsayer";
    charQuoteEl.innerHTML =
      "Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be.";
    charImgEl.src = "img/soothsayer.png";
  } else if (name === "storming ox" || name === "ox") {
    charNameEl.innerHTML = "Storming Ox";
    charQuoteEl.innerHTML = "You insolent fool!";
    charImgEl.src = "img/storming-ox.png";
  } else if (name === "tai lung") {
    charNameEl.innerHTML = "Tai Lung";
    charQuoteEl.innerHTML =
      "Finally, a worthy opponent. Our battle will be legendary!";
    charImgEl.src = "img/tai-lung.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML =
      "You may have spelt the characters name incorrectly. Try not to use dashes or underscores.";
    charImgEl.src = "img/question-mark.png";
  }
}

function themeBtnClicked() {
  // Input
  let theme = document.getElementById("theme-in").value.toLowerCase();

  // Randoms
  let rand1 = Math.floor(Math.random() * 256);
  let rand2 = Math.floor(Math.random() * 256);
  let rand3 = Math.floor(Math.random() * 256);

  // If Statement
  if (theme === "dark" || theme === "black") {
    bodyEl.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    bodyEl.style.color = "white";
    divEl.style.color = "white";
  } else if (theme === "light" || theme === "white") {
    bodyEl.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    bodyEl.style.color = "black";
    divEl.style.color = "black";
  } else if (theme === "random") {
    bodyEl.style.backgroundColor = `rgba(${rand1}, ${rand2}, ${rand3}, 0.7)`;
    bodyEl.style.color = `rgb(${rand2}, ${rand3}, ${rand1})`;
    divEl.style.color = `rgb(${rand3}, ${rand1}, ${rand2})`;
  }
  console.log(`${rand3}, ${rand1}, ${rand2}`);
}
