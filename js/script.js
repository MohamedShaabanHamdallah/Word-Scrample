let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]

let wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word"),
inputFiled = document.querySelector("input"),
timeText = document.querySelector(".time b")

let correctWord,timer;


const inittimer = maxtime =>{
    timer = setInterval(()=>{
        if(maxtime>0){
            maxtime--;
            return timeText.innerHTML=maxtime;
        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toLocaleUpperCase()} was a correct word`);
        initGame()
    },1000)
}


const initGame = () => {
    inittimer(30)
    let randomObject = words[Math.floor(Math.random() * words.length)];
    let wordarr = randomObject.word.split("");
    for(let i=wordarr.length-1; i > 0;i--){
        let j=Math.floor(Math.random()*[i + 1]);
        [wordarr[i],wordarr[j]] = [wordarr[j],wordarr[i]]
    }
    wordText.innerHTML = wordarr.join("");
    hintText.innerHTML = randomObject.hint;
    correctWord = randomObject.word;
    inputFiled.value =""
    inputFiled.setAttribute("maxlength",correctWord.length)
    console.log(wordarr,randomObject.word);
}
let checkword = () =>{
    let userword = inputFiled.value.toLocaleLowerCase();
    if (!userword) {
        return alert(`please enter a  word check`)
    }
    if (userword !== correctWord) return alert(`oops! ${userword} is not a correct word , try agin`);
        alert(`congrats! ${userword.toLocaleUpperCase()} is a correct word`)
}

refreshBtn.addEventListener(`click`, initGame);
checkBtn.addEventListener(`click`,checkword);
initGame();