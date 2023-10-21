// Function for changing Pillows color & giving underline to selected Pillow button
const changePillowColor = (color) =>
{
    const pillowButtons = document.getElementsByClassName('pillow-btn');
    for(let button of pillowButtons)
    {
        button.style.borderBottom = 'none';
    }
    
    const cardImg = document.getElementById('card-image');
    cardImg.src = `images/pillow_${color}.webp`;

    const pillowButton = document.getElementById(`${color}-pillow-btn`);
    pillowButton.style.borderBottom = '2px solid black';
}
    

//Underline the White Pillow button by default
function defaultUnderline()
{
    let pillowButton = document.getElementById('white-pillow-btn');
    pillowButton.style.borderBottom = '2px solid black';
}
defaultUnderline();


// Setting functionality of Slider
let cards;
let counter;
function showSlider()
{
    cards = document.querySelectorAll(".cards");
    counter = 0;
    cards.forEach((card,index) =>
    {
        card.style.left = `${index*100}%`
    })
    slideCarts(cards,counter)
}

const slideCarts = (cards,counter) =>
{
    cards.forEach((card) =>
    {
        card.style.transform = `translateX(-${counter*100}%)`
    })
}


// Setting functionality of Slider's Prev-Next button
const goPrev = () =>
{
    if(counter == 0)
    {
        counter = cards.length-1;
        slideCarts(cards,counter);
    }
    else
    {
        counter--;
        slideCarts(cards,counter);
    }
}
const goNext = () =>
{
    if(counter == cards.length-1)
    {
        counter = 0;
        slideCarts(cards,counter);
    }
    else
    {
        counter++;
        slideCarts(cards,counter);
    }
}
showSlider();


const productContainer = document.getElementById('product-container');
const showVaseBtn = document.getElementById('show-vase-btn');
const showPillowBtn = document.getElementById('show-pillow-btn');

// Showing Vase on slider
document.getElementById('show-vase-btn').addEventListener('click',function()
{
    showVaseBtn.style.animation = 'mymove 2s infinite';
    showPillowBtn.style.animation = 0;

    productContainer.innerHTML = 
    `
    <div class="cards">
        <img class="card-image" src="images/vase.webp" alt="vase image">
        <p class="new">New</p>
        <div class="ratings-container">
            <p class="hay">HAY</p>
            <p class="ratings">4.8 <i class="fa-solid fa-star" style="color: #ffd43b;"></i></p>
        </div>
        <h3 class="card-title">Bottoms Up Vase (Navy Blue)</h3>
        <p class="vase-price">$68.00</p>

        <button class="change-vase-btn"></button>
    </div>

    <div class="cards">
        <img id="card-image" src="images/pillow_white.webp" alt="pillow image">
        <div class="ratings-container">
            <p class="hay">HAY</p>
            <p class="ratings">4.7 <i class="fa-solid fa-star" style="color: #ffd43b;"></i></p>
        </div>
        <h3 class="card-title">Plica Sprinkle Cushion</h3>
        <p class="pillow-price-container"><span class="pillow-current-price">From $79.00</span> <span class="pillow-prev-price">$95.00</span></p>

<!-- All Buttons for changing Pillow's color -->
        <button onclick="changePillowColor('white')" id="white-pillow-btn" class="pillow-btn"></button>
        <button onclick="changePillowColor('yellow')" id="yellow-pillow-btn" class="pillow-btn"></button>
        <button onclick="changePillowColor('pink')" id="pink-pillow-btn" class="pillow-btn"></button>
        <button onclick="changePillowColor('green')" id="green-pillow-btn" class="pillow-btn"></button>
    </div>
    `
    defaultUnderline();
    showSlider();
})

// Showing Pillow on slider
document.getElementById('show-pillow-btn').addEventListener('click',function()
{
    showPillowBtn.style.animation = 'mymove 2s infinite';
    showVaseBtn.style.animation = 0;

    productContainer.innerHTML = 
    `
    <div class="cards">
        <img id="card-image" src="images/pillow_white.webp" alt="pillow image">
        <div class="ratings-container">
            <p class="hay">HAY</p>
            <p class="ratings">4.7 <i class="fa-solid fa-star" style="color: #ffd43b;"></i></p>
        </div>
        <h3 class="card-title">Plica Sprinkle Cushion</h3>
        <p class="pillow-price-container"><span class="pillow-current-price">From $79.00</span> <span class="pillow-prev-price">$95.00</span></p>

<!-- All Buttons for changing Pillow's color -->
        <button onclick="changePillowColor('white')" id="white-pillow-btn" class="pillow-btn"></button>
        <button onclick="changePillowColor('yellow')" id="yellow-pillow-btn" class="pillow-btn"></button>
        <button onclick="changePillowColor('pink')" id="pink-pillow-btn" class="pillow-btn"></button>
        <button onclick="changePillowColor('green')" id="green-pillow-btn" class="pillow-btn"></button>
    </div>

    <div class="cards">
        <img class="card-image" src="images/vase.webp" alt="vase image">
        <p class="new">New</p>
        <div class="ratings-container">
            <p class="hay">HAY</p>
            <p class="ratings">4.8 <i class="fa-solid fa-star" style="color: #ffd43b;"></i></p>
        </div>
        <h3 class="card-title">Bottoms Up Vase (Navy Blue)</h3>
        <p class="vase-price">$68.00</p>

        <button class="change-vase-btn"></button>
    </div>
    `
    const pillowButton = document.getElementById('white-pillow-btn');
    pillowButton.style.borderBottom = '2px solid black';

    defaultUnderline();
    showSlider();
})