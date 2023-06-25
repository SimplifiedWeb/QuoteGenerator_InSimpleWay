const quote = document.querySelector(".quotes")
const btn = document.querySelector(".btn")
// console.log(btn)
const authors = document.querySelector(".author")

const quotes = [
    {
        quote : "Everyting will be fine just stay focused and work hard",
        author : "Faizan"
    },{
        quote : "For Truly this Reality is a Hell",
        author : "Madara Uchiha"
    },{
        quote : "Work Fucking harder",
        author : "Might Guy"
    },{
        quote : "Motivation is fake, Dicipline is the bunker",
        author : "Andrew Tete"
    },{
        quote : "If a man in love he bears the love of heatred",
        author : "Obito Uchiha"
    }
]

function randomGenerator(){

    const target = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[target].quote;
    authors.innerText = quotes[target].author;

}



btn.addEventListener("click", randomGenerator);

