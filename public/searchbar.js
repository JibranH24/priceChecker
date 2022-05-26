//Wrapping event listner inside axios
//const {sqlite3} = require('../Server/server.js')
//const sqlite3 = require('sqlite3')
//const favdb = require('../Server/server.js')

let coins = []
let filteredCoins = coins
let favCoins=[]

axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
  .then(response =>{
    coins=response.data.coins
    favCoins= response.data.coins
    updateCoinsHtml(coins)
})


function updateSearchTerm(val){
  filteredCoins=coins.filter(c => c.name.toLowerCase().includes(val.toLowerCase()))
  updateCoinsHtml(filteredCoins)
}
  
function updateCoinsHtml(coins){
  const holder = document.getElementById('holder')
  holder.innerHTML=''

  coins.forEach(coin => {
    const card = document.createElement("div")
      card.classList.add("card")
      holder.appendChild(card)

      const logo = document.createElement("img")
      logo.setAttribute("src",coin.icon)
      logo.classList.add("img")
      card.appendChild(logo)


      const coinName = document.createElement("p")
      coinName.innerHTML=coin.name
      card.appendChild(coinName)
      
      const coinPrice = document.createElement("p")
      coinPrice.innerHTML=`£${((coin.price/10)*8).toFixed(2)}`
      card.appendChild(coinPrice)

      const websiteLink = document.createElement("a")
      var linkText = document.createTextNode("Website");
      websiteLink.appendChild(linkText);
      websiteLink.title = "Coin Website";
      websiteLink.href=coin.websiteUrl
      card.appendChild(websiteLink);

      const twitterLink = document.createElement("a")
      var linkText = document.createTextNode("Twitter");
      twitterLink.appendChild(linkText);
      twitterLink.title = "Coin Website";
      twitterLink.href=coin.twitterUrl
      card.appendChild(twitterLink);

      // Before you do this, you should use axios to get a list of the user's currently liked coins
      // If a coin is liked, the text should be "Remove from favourites"
      // and the button should be given a class of "favourite"
      const favButton = document.createElement("button")
      favButton.innerHTML="Add to Favourites"
      favButton.setAttribute("id",coin.name)
      favButton.setAttribute("onclick", "saveFav(this)")
      card.appendChild(favButton)

  })
}




function saveFav(button){
  
    const id = button.getAttribute("id")
    const isFavourite = button.getAttribute("class")
    if (isFavourite) {
      button.classList.remove('favourite')
      button.innerText = 'Add to favourites'
      // Now call axios.delete() to delete from favourites
    } else {
      button.classList.add('favourite')
      button.innerText = 'Remove from favourites'
      // Now call axios.post() to add to favourites
    }
  
      // favdb.run(`INSERT INTO favourites(COIN) VALUES('${id}')`)
    
  }
