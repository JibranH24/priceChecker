// LOGIN 1. When the user submits the form, get the email,password and use axios to POST it to 'localhost:SERVERPORT/authenticate'
// LOGIN 2. await the response, if:
// (status 200) we should show a pop up saying 'Hello, FIRSTNAME!'   
// (status 404) the user doesn't exist, so show a popup saying so!
// (status 403) the user exists but the password is wrong, so show a popup saying so! 
//res.status



// let login = async() => {
//     console.log("login function")
//     let inputEmail = document.getElementById("inputEmail").value
//     let inputPassword = document.getElementById("inputPassword").value
//     axios.post('authenticate',{
//         email: inputEmail,
//         password: inputPassword
//     }) 
//     .then(function (response) {
//         console.log(response);
//         alert("you have logged in" +{first_name})
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
// }

