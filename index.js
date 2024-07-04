const quoteText = document.getElementById('quote')
const newQuoteBtn = document.getElementById('quote-btn')
const quoteAuthor = document.getElementById('author')
const mainContainer = document.querySelector('.container')

const getQuotes = async(randomNumber) => {
    const URL = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data[randomNumber])
        quoteText.innerText = data[randomNumber].text
        quoteAuthor.innerText = data[randomNumber].author
    } catch (error) {
        console.log(error)   
    }
} 

const getRandomQuote = () => {
    const quote = Math.floor(Math.random(0) * 15)
    return quote
}


newQuoteBtn.addEventListener('click', () => {
    getQuotes(getRandomQuote())
})

const IMAGE_LINKS = [
    './assets/mountain.jpg','./assets/collabs.webp', './assets/portfolio-2.webp', './assets/communities.webp'
]

const backgroundChanger = () => {
    let count = 0
  

  const interval = setInterval(() => {
    count++
    console.log(IMAGE_LINKS[count])
        mainContainer.style.backgroundImage = `url(${IMAGE_LINKS[count]})`
        document.body.style.backgroundColor = `#0D0C0C`
        mainContainer.style.color = `#fff`

        if(count === 4){
         clearInterval(interval)
        }

   }, 60000)

}
backgroundChanger()
