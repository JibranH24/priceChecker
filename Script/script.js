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
    

 