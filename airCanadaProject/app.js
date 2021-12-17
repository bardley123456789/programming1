//NAV BAR

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// CURRENT FLIGHT VIEWER (SPECIAL BUTTON)
const flights= ["YVR to LAX", "SUX to CKG", "HTR to ATL", "PDG to ZSA", "YXJ to CAN", "RSW to GSP", "HON to IPH", "JOE to ILY", "AKN to LAX", "MSQ to OUL", "OAK to SGF", "WHK to YWL"];
let today = new Date();
const flightDisplayed = document.getElementById('flight');
let currentFlight = 0;
const switchFlight = document.getElementById('switch-flight');
const timeDisplay = document.getElementById('time');


window.addEventListener("DOMContentLoaded", function () {
  showFlight();
  timeDisplay.textContent = today;
});

function showFlight() {
  flightDisplayed.textContent = flights[currentFlight];
}

switchFlight.addEventListener("click", function () {
  currentFlight++;
  if (currentFlight > flights.length - 1) {
    currentFlight = 0;
  }
  showFlight(currentFlight);

  timeDisplay.textContent = today;
});


// LIKE COUNTER
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count = count + 2;
    } else {
      count = 0;
    }

    value.textContent = count;
  });
});

//COLOUR SCHEME FLIPPER
let generateBtn = document.getElementById("generate-btn");
let hexString = "0123456789abcdef";

let randomColor = () => {
    let hexCode = "#";
    for( i=0; i<6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

let generateGrad = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let angle = 45;
    document.body.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;

}

generateBtn.addEventListener("click", generateGrad);

// REVIEWS SECTION
const reviews = [
  {
    id: 1,
    name: "Jennifer Griffith",
    job: "Flight Attendant",
    img:
      "https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=20&m=1009749608&s=612x612&w=0&h=3bnVp0Y1625uKkSwnp7Uh2_y_prWbgRBH6a_6jRew3g=",
    text:
      "I've been working at Air Canada for 15 decades. It started as a way to feed the children, but gradually became the the greatest thing in my life. I now wake up every morning in excited anticipation for my daily duties as flight attendant. I will always love Air Canada and pledge alligiance to their morals, values and constituents.",
  },
  {
    id: 2,
    name: "Victoria Cuijpers",
    job: "Air Traffic Control",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68xCJyjzwUC0J89fXPOkmIvW09vTZjHRkVg&usqp=CAU",
    text:
      "My job as Air Traffic Control has provided me with great joy and pleasure. It offers excellent benefits with good pay and good hours. I would recommend working here to anyone responsible willing to work hard.",
  },
  {
    id: 3,
    name: "Rubén Nascimbene",
    job: "Pilot",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oFkMVCZukTGlbcB4AOKTac4Vlae8ZcC8TQ&usqp=CAU",
    text:
      "Air Canada is one of the best companies to work at as a pilot. I love the sense of community and love I get working here every day. To any pilots in training: apply here!",
  },
  {
    id: 4,
    name: "Rusty Ardizzone",
    job: "Flight Manager",
    img:
      "https://media.istockphoto.com/photos/happy-smiling-man-looking-away-picture-id1158245623?k=20&m=1158245623&s=612x612&w=0&h=rGmn02kNdoQySPEoQmbbDBxOayL4sdW3QWqP9rjgxCg=",
    text:
      "I would highly recommend Air Canada to anyone with a brain. It is ggreat workinng here and i love it. Managing here is incredible job! come work...!",
  },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
