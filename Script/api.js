axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
  .then(function (response) {
    return response.data;
  })
  .then(function (data) {
    
    data.coins.forEach(coin => {
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
      coinPrice.innerHTML=`$${(coin.price).toFixed(2)}`
      card.appendChild(coinPrice)
     
      // const priceChange1Hour = document.createElement("p")
      // priceChange1Hour.innerHTML=`Price Change 1 Hour $${coin.priceChange1h}`
      // card.appendChild(priceChange1Hour)
      
      
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

      const linkDiv = document.createElement("div")
       linkDiv.classList.add("linkDiv")
      card.appendChild(linkDiv)
     })
     
  })
  .catch(function (error) {
    console.error(error);
  });


function processForm(form) {
    axios.post('/', {
    //   NAME: rname.value,
    //   IMAGELINK: rurl.value,
        //name:id.value,
        username: user_name.value,
        password: password.value,
        firstname: first_name.value,
        lastname: last_name.value,
        phonenumber: phone_number.value,
        age: age.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   console.log(rname.value)
  }
    

 