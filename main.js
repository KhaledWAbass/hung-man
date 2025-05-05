// name the game 
let name_game = "Hange Man"
document.title = name_game
document.querySelector(".logo").innerHTML = name_game

// the array 
let bankOfWords = {
    "movies": ["inception", "titanic", "avatar", "the matrix", "interstellar", "gladiator", "the godfather", "pulp fiction", "jurassic park", "forrest gump", "the dark knight", "parasite"],
    "books": ["to kill a mockingbird", "the great gatsby", "moby dick", "pride and prejudice", "the catcher in the rye", "war and peace", "1984", "the hobbit", "harry potter", "the lord of the rings", "crime and punishment"],
    "famous": ["albert einstein", "marie curie", "isaac newton", "leonardo da vinci", "nikola tesla", "galileo galilei", "charles darwin", "stephen hawking", "martin luther king", "nelson mandela", "mahatma gandhi"],
    "family": ["father", "mother", "sister", "brother", "uncle", "aunt", "cousin", "grandfather", "grandmother", "nephew", "niece", "stepmother", "stepfather"],
    "countries": ["canada", "brazil", "japan", "germany", "australia", "india", "france", "italy", "china", "russia", "mexico", "egypt", "spain", "south africa"],
    "animals": ["elephant", "tiger", "giraffe", "kangaroo", "panda", "dolphin", "eagle", "penguin", "lion", "zebra", "cheetah", "whale", "shark", "octopus"]
};
// sounds 
let sound_wrong = document.querySelector(".sound-wrong")
let sound_right = document.querySelector(".sound-correct")
// the letters
let letters = "ABCDEFGHIJKLMNOPQRSTUYWXYZ"

// make function to end the game
function EndGame(){
    let div = document.createElement("div")
    div.className = "endGame"
    div.innerHTML = `<h2>Game Over  </h2>`
    let span = document.createElement("span")
    span.innerHTML = `The word is: ${the_word}`
    div.appendChild(span)
    let button = document.createElement("button")
    button.innerHTML = "Play Again"
    button.className = "playAgain"
    button.onclick = function(){
        location.reload()
    }
    div.appendChild(button)
    document.body.appendChild(div)
}
function WinGame(){ 
    let div = document.createElement("div")
    div.className = "endGame"
    div.innerHTML = `<h2>Congratulations  </h2>`
    let span = document.createElement("span")
    span.innerHTML = `The word is: ${the_word}`
    div.appendChild(span)
    let button = document.createElement("button")
    button.innerHTML = "Play Again"
    button.className = "playAgain"
    button.onclick = function(){
        location.reload()
    }
    div.appendChild(button)
    document.body.appendChild(div)
}
// random keys
let keys = Object.keys(bankOfWords)
let random = Math.floor(Math.random() * keys.length)
let random_keys = keys[random]

// random values
let s = bankOfWords[random_keys]
let random_word_index = Math.floor(Math.random() * s.length)
let the_word = s[random_word_index]
console.log(the_word)

// genrat the spans 
document.querySelector(".header .unet span").innerHTML = random_keys
let ArrayLetters = Array.from(letters)
let area = document.querySelector(".letters")
ArrayLetters.forEach((inp) => {
    let span = document.createElement("span")
    span.className = `letter`
    span.innerHTML = inp
area.appendChild(span)
})
// genrat the div
let divLetters = document.querySelector(".contaner .div-letters")

let Array_word = Array.from(the_word)
Array_word.forEach((e)=>{
let spans =document.createElement("span")
if (e === " "){
spans.classList.add("space")
}
divLetters.appendChild(spans)
})
// select the spans
let spans = document.querySelectorAll(".contaner .div-letters span")
// select the draw
let draw = document.querySelector(".game-Draw")
let  wrong = 0
// add the event to the letters
document.addEventListener("click",(e)=>{

if (e.target.className === "letter" ){
    let stautas = false
    e.target.classList.add("clicked")
 
    let clickedLetter = e.target.innerHTML.toLowerCase();
 // loop in the word and check if the letter is in the word
    Array_word.forEach((letter, index) => {
        // check if the letter is in the word
        if (clickedLetter == letter) {
            stautas = true
            
            // loop in all the spans and add the letter to the span
            spans.forEach((span,letterIndex)=>{
                // check if the index is equal to the letter letterindex
                if (letterIndex == index){
                    span.innerHTML = letter
                }else{

                }
            })
        }
    });
    // out side the loop check if the stautas is not in the word
    if (stautas == false){
wrong++
draw.classList.add(`wrong-${wrong}`)
// check if the wrong is equal to 8
    if (wrong === 8 && stautas == false){  
        EndGame()
        sound_wrong.play()
    }
}else {
    let check = Array.from(spans).every((span)=>{
        return span.innerHTML !== ""
    })
    if (check == true){
        WinGame()
        sound_right.play()
}

}}})