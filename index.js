const { use } = require("chai");

// Add your code here
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  // method: "POST" is missing from the object below
const configurationObject = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });



  function submitData(name, email){
    const formData2 = {
  name: name,
  email: email,
}
  return fetch("http://localhost:3000/users", {
    method: 'POST',
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData2),
  })
   .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    let obj = document.createElement('script')
    obj.innerHTML = `${object.id}`
    document.body.querySelector('script').appendChild(obj)
    console.log(object);
  })
  .catch(function (error) {
    let err = document.createElement('script')
    err.innerHTML = `${error}`
    document.body.querySelector('script').appendChild(err)
    console.log(err);
  }
  )
}