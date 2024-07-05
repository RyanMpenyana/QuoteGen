const quoteText = document.getElementById('quote')
const newQuoteBtn = document.getElementById('quote-btn')
const quoteAuthor = document.getElementById('author')
const mainContainer = document.querySelector('.container')
const twitterBtn = document.getElementById('twitter-button')

//Getting Quotes from Api
const getQuotes = async(randomNumber) => {
    const URL = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(URL)
        const data = await response.json()
        quoteText.innerText = data[randomNumber].text
        quoteAuthor.innerText = data[randomNumber].author

        if(data[randomNumber].text.length > 50){
            quoteText.classList.add('long-quote')
        }else{
            quoteText.classList.remove('long-quote')
        }
    } catch (error) {
        console.log(error)   
    }
} 

//Getting a random index for quotes
const getRandomQuote = () => {
    const quote = Math.floor(Math.random(0) * 15)
    return quote
}
//Tweeting quotes
const tweetQuote = () => {
    const TWITTER_URL = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${quoteAuthor.innerText}`
    window.open(TWITTER_URL, '_blank') 
}

//Background Handler code

const IMAGE_LINKS = [
    './assets/mountain.jpg','./assets/collabs.webp', './assets/portfolio-2.webp', './assets/communities.webp'
]

let count = 0
const backgroundChanger = () => {
    const interval = setInterval(() => {
        count++
        console.log(IMAGE_LINKS[count])
        mainContainer.style.backgroundImage = `url(${IMAGE_LINKS[count]})`
        document.body.style.backgroundColor = `#0D0C0C`
        mainContainer.style.color = `#fff`
                
    if (count >= IMAGE_LINKS.length) {
        count = 0
        clearInterval(interval)
    }    
}, 840000000)}

backgroundChanger()

//Event Listeners
twitterBtn.addEventListener('click', () => {
    tweetQuote()
})

newQuoteBtn.addEventListener('click', () => {
    getQuotes(getRandomQuote())
})

