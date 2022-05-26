//Wrapping event listner inside axios
let coins = []
let filteredCoins = coins

axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
  .then(response =>{
    coins=response.data.coins
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
      
      let minus = "-"

      const oneDay = document.createElement("p")
      oneDay.innerHTML=` 24h (£): ${((coin.priceChange1d/10)*8).toFixed(2)}`
      oneDay.style.color="#90EE90"
      if(oneDay.innerHTML.includes(minus)){
        oneDay.style.color= "red"
      }
      else{
        oneDay.innerHTML=` 24h (£): +${((coin.priceChange1d/10)*8).toFixed(2)}`
      }
       card.appendChild(oneDay)

      const oneWeek = document.createElement("p")
      oneWeek.innerHTML=` 7d (£): ${((coin.priceChange1w/10)*8).toFixed(2)}`
      oneWeek.style.color="#90EE90"
      if(oneWeek.innerHTML.includes(minus)){
        oneWeek.style.color= "red"
      }
      else{
        oneWeek.innerHTML=` 7d (£): +${((coin.priceChange1w/10)*8).toFixed(2)}`
      }
      card.appendChild(oneWeek)

      const websiteLink =document.createElement("a")
      var linkText = document.createTextNode("Website");
      websiteLink.appendChild(linkText);
      websiteLink.title = "Coin Website";
      websiteLink.href=coin.websiteUrl
      card.appendChild(websiteLink);

      const twitterLink =document.createElement("a")
      var linkText = document.createTextNode("Twitter");
      twitterLink.appendChild(linkText);
      twitterLink.title = "Coin Website";
      twitterLink.href=coin.twitterUrl
      card.appendChild(twitterLink);
  })
}

