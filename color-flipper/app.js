const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "silver", "white", "maroon", "purple", "fuchsia", "lime", "olive", "navy", "teal", "aqua", "cadetblue", "crimson", "cyan", "darkgoldenrod", "salmon", "deeppink", "lavender", "lawngreen", "lightseagreen", "mediumaquamarine", "mediumvioletred", "midnightblue", "powderblue", "tomato", "thistle", "plum"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.getElementById('dissapear').innerHTML=" ";
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}