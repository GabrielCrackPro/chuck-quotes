const API_URLS = {
 random:"https://api.chucknorris.io/jokes/random",
 categories:"https://api.chucknorris.io/jokes/categories",
 filterCategory:"https://api.chucknorris.io/jokes/random?category="
}

const quoteContainer = document.querySelector(".quote-container")

const getData = async (url) => {
let data = await fetch(url).then(response => response.json())
return data
}
const formatDate = (date) => {
return new Date(date).toLocaleString()
}
const getRandomElement = (array) => {
let index = Math.floor(Math.random() * array.length)
return array[index]
}

window.onload = async () => {
let quote = await getData(API_URLS.random)
let category = await getData(API_URLS.categories)

quoteContainer.innerHTML = `
<img src="${quote.icon_url}" alt="logo">
<h3>${quote.value}</h3>
<small>Created At: ${formatDate(quote.created_at)}</small>
<small>Updated At: ${formatDate(quote.updated_at)}</small>
<div class="btn-group">
<a href="${quote.url}" target="blank" class="btn btn-sm btn-dark mt-2 me-2">View Source</a>
<a href="${API_URLS.filterCategory + getRandomElement(category)}" target="blank" class="btn btn-sm btn-dark mt-2">Random Category Quote</a>
</div>
`
}
