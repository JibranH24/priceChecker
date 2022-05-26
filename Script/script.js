//const User = require('User')

// axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
//   .then(function (response) {
//     return response.data;
//   })
//   .then(function (data) {
    
//     data.coins.forEach(coin => {
//       const card = document.createElement("div")
//       card.classList.add("card")
//       holder.appendChild(card)

//       const logo = document.createElement("img")
//       logo.setAttribute("src",coin.icon)
//       logo.classList.add("img")
//       card.appendChild(logo)


//       const coinName = document.createElement("p")
//       coinName.innerHTML=coin.name
//       card.appendChild(coinName)
      
//       const coinPrice = document.createElement("p")
//       coinPrice.innerHTML=`$${(coin.price).toFixed(2)}`
//       card.appendChild(coinPrice)
     
//       // const priceChange1Hour = document.createElement("p")
//       // priceChange1Hour.innerHTML=`Price Change 1 Hour $${coin.priceChange1h}`
//       // card.appendChild(priceChange1Hour)
      
      
//       const websiteLink =document.createElement("a")
//       var linkText = document.createTextNode("Website");
//       websiteLink.appendChild(linkText);
//       websiteLink.title = "Coin Website";
//       websiteLink.href=coin.websiteUrl
//       card.appendChild(websiteLink);

//       const twitterLink =document.createElement("a")
//       var linkText = document.createTextNode("Twitter");
//       twitterLink.appendChild(linkText);
//       twitterLink.title = "Coin Website";
//       twitterLink.href=coin.twitterUrl
//       card.appendChild(twitterLink);

//       const linkDiv = document.createElement("div")
//        linkDiv.classList.add("linkDiv")
//       card.appendChild(linkDiv)
//      })
     
//   })
//   .catch(function (error) {
//     console.error(error);
//   });


function processForm(form) {
  console.log(form.value);  

  axios.post('http://localhost:3000/users', {
    username: username.value,
    password: password.value,
    first_name:first_name.value,
    last_name:last_name.value,
    age:age.value,
    email:email.value,
    phone_number:phone_number.value    
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })

  // User.CreateNewUser(
  //     document.getElementById(username).value,
  //     document.getElementById(password).value,
  //     document.getElementById(first_name).value,
  //     document.getElementById(last_name).value,
  //     document.getElementById(email).value,
  //     document.getElementById(phone_number).value,
  //     document.getElementById(age).value
  //   )
  }
    

 