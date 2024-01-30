// ----------Theme--------
const body = document.querySelector("body");
const theme_btn = document.querySelector(".theme_btn");
const icon = document.querySelector(".fa-regular");

// ---to save the lightmode use object "local storage"----
function store(value){
    localStorage.setItem('lightmode',value);
}

// ----function that indicates if lightmode property exits. It loads the page where we left
function load(){
    const lightmode = localStorage.getItem('lightmode');
    
    // if lightmode was never activated
    if(!lightmode){
        store(false);
        icon.classList.add('fa-moon');
    }
    else if( lightmode == 'true'){
        body.classList.add('lightmode');
        icon.classList.add('fa-sun');
    }
    else if( lightmode == 'false'){//if lightmode exists but is disabled
        icon.classList.add('fa-moon');
    }
}
load();

theme_btn.addEventListener('click', () => {
    body.classList.toggle('lightmode');
    icon.classList.add('animation');

    // save true or false
    store(body.classList.contains('lightmode'));
    if(body.classList.contains('lightmode')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        alert("Light mode is injurious to developer😉");
    }
    else{
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    setTimeout( () => {
        icon.classList.remove('animation');
    },800);
})


// ----------About Topics--------
var tablinks = document.getElementsByClassName("topic-link");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ----------Skill1---------
let number1 =document.getElementById("number1");
let counter1 = 0;
setInterval(() => {
    if(counter1 == 55){
        clearInterval();
    }
    else{
        counter1 += 1;
        number1.innerHTML = counter1 + "%";
    }
}, 30);

// ----------Skill2---------
let number2 =document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
    if(counter2 == 40){
        clearInterval();
    }
    else{
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
}, 30);

// ----------Skill3---------
let number3 =document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
    if(counter3 == 50){
        clearInterval();
    }
    else{
        counter3 += 1;
        number3.innerHTML = counter3 + "%";
    }
}, 30);

// ----------Skill4---------
let number4 =document.getElementById("number4");
let counter4 = 0;
setInterval(() => {
    if(counter4 == 35){
        clearInterval();
    }
    else{
        counter4 += 1;
        number4.innerHTML = counter4 + "%";
    }
}, 30);


// ----------Menu---------

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// -----------Contact form---------

const scriptURL = 'https://script.google.com/macros/s/AKfycbwEpEKK4Xb-LVP1YvXihdfU0zHedd_8ggOrD5Gba-phOEsCbwQN9Q1EXS5gKTYktnVy4g/exec'
  const form = document.forms['submit-to-google-sheet']
  const success_msg = document.getElementById("success_msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        success_msg.innerHTML = "Email sent successfully"
        setInterval(function(){
            success_msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })