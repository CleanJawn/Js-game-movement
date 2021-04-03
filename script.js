//creates a variable that contains the element that contains player
let character = document.getElementById("character");
//create a variable to store the interval of how often to excute the movement function
let interval;
//variable to store if both keys are being pressed simultaneously
let both = 0;

//function that gets called upon to move left
function moveLeft(){
    //defines the position in pixels of the character (parsing it to make it an int rather than a string)
    //we are defining position based on its left value but you could from right as well/instead
    let position = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    //logging the position in the console
    console.log(position)
    //moving the character to the left by 5 pixels.
    character.style.left = position - 5 + "px";
}
//function that gets called upon to move right
function moveRight(){
    //defines the position in pixels of the character (parsing it to make it an int rather than a string)
    //we are defining position based on its left value but you could from right as well/instead
    let position = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    //logging the position in the console
    console.log(position)
    //moving the character to the right by 5 pixels.
    character.style.left = position + 5 + "px";
}
//function that gets called upon to move down
function moveDown(){
    //defines the position in pixels of the character (parsing it to make it an int rather than a string)
    //we are defining position based on its bottom value but you could from right as well/instead
    let position = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    //logging the position in the console
    console.log(position)
    //moving the character down by 5 pixels.
    character.style.bottom = position - 5 + "px";
}
//function that gets called upon to move up
function moveUp(){
    //defines the position in pixels of the character (parsing it to make it an int rather than a string)
    //we are defining position based on its bottom value but you could from right as well/instead
    let position = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    //logging the position in the console
    console.log(position)
    //moving the character up by 5 pixels.
    character.style.bottom = position + 5 + "px";
}



//Event listener that will determine when the function will be called
document.addEventListener("keydown", event => {
    //check that another key is not being pressed
    if (both === 0){
        //now movement can't go in another direction until key is released
        both++;
        //if statement that's block will only run when the left arrow is hit
        if (event.key === "ArrowLeft"){
            //sets the function *moveLeft* to be called ever 1 millisecond and saves to a variable
            interval = setInterval(moveLeft,  10);
        }
        //if statement that's block will only run when the right arrow is hit
        if (event.key === "ArrowRight"){
            //sets the function *moveRight* to be called ever 1 millisecond and saves to a variable
            interval = setInterval(moveRight, 10);
        }
        //if statement that's block will only run when the down arrow is hit
        if (event.key === "ArrowDown"){
            //sets the function *moveRight* to be called ever 1 millisecond and saves to a variable
            interval = setInterval(moveDown,  10);
        }
        //if statement that's block will only run when the up arrow is hit
        if (event.key === "ArrowUp"){
            //sets the function *moveRight* to be called ever 1 millisecond and saves to a variable
            interval = setInterval(moveUp,    10);
        }
    }
})
//event listener that clears the interval (tells to stop running the function), when a key is no
//longer being pressed
document.addEventListener("keyup", event =>{
    clearInterval(interval);
    //another key can execute a function again
    both = 0;
})