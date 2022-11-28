// Task – 1: Define Function drawBox() to Draw Box
/*
    The function should accept DOM element as the parameter.
    Using DOM methods and properties, the function should create div and 
    provide it with style properties: width, height, border idth and border style
    The div element should be appended to the element passed as parameter
    The function should then return the styled div element.
*/
let head = document.getElementById("animated-header");
function drawBox() {
    head.style.width="100vw";
    head.style.height="100px";
    head.style.border="5px solid black";
}

// Task 2 – Define Function changeBorderColor() to Change Color of Box Border
/*
    The function should accept DOM element as the parameter whose border color 
    needs to be changed.
    Using DOM methods and properties, the function should style the element with 
    orange color to its border.
    The function should then return the styled div element.
*/
function changeBorderColor() {
    head.style.borderColor="orange";
}

// Task 3 – Define Function makeBorderRounded to Make Box Corners Rounded
/*
    The function should accept DOM element as the parameter whose border's 
    corners need to be rounded.
    Using DOM methods and properties, the function should style the element with 
    radius of its border set to 15px.
    The function should then return the styled div element.
*/
function makeBorderRounded() {
    head.style.borderRadius="15px";
}

// Task 4 – Define Function fillColor() to Fill the Box with a Color
/*
    The function should accept DOM element as the parameter whose background color 
    needs to be changed
    Using DOM methods and properties, the function should style the element with 
    background color cadet blue
    The function should then return the styled div element.
*/
function fillColor() {
    head.style.backgroundColor= "cadetBlue";
}

// Task 5 – Define Function displayHeading() to Enter Text in Box
/*
    The function should accept DOM element as the parameter within which text 
    needs to be entered.
    The heading text should be displayed within `h1` element.
    The text to be displayed should be AMC Entertainment.
    The color of the text should be orange and should be centrally aligned.
    The function should then return the div element with the text.
*/
function displayHeading() {
    let text = document.createElement("h1")
    let interText = document.createTextNode("AMC Entertainment")
    text.appendChild(interText);
    head.appendChild(text)
    head.style.textAlign="center"
    head.style.color="orange"
    head.style.padding="20px"
}

// Task 6 - Call Functions to Animate After a Delay
/*
    Create nested structure with calls to setTimeout() method
    Each call to setTimeout() should call another setTimeout() method.
    Each callback of setTimeout() should call the animation method the return from 
    which should be passed to the next animation method.
    Observe the Callback Hell Effect.
*/
setTimeout(()=>{drawBox()
    setTimeout(() =>{changeBorderColor()
        setTimeout(() => {
            makeBorderRounded()
            setTimeout(() =>{
                fillColor()
                setTimeout(()=>{
                    displayHeading()
                },3000)
            },2500)
        },2000)
    },1500) 
},1000);