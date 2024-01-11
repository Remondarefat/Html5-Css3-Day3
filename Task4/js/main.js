
let loginButton = document.getElementById("loginBtn");
let userNameInput = document.getElementById("userName");
let emailAddressInput = document.getElementById("emailAddress");
let passwordInput = document.getElementById("password");
let tableData = document.getElementById ("tableData");
// console.log(tableData);
let usersContainer = [];

if (localStorage.getItem("user") != null) {
  usersContainer = JSON.parse(localStorage.getItem("user"));
  displayUsers();
}

function checkInput() {
  //! Check if users are stored in local storage
  if(localStorage.getItem("user") == null){
    alert('plese signup first');
    location.assign('index.html');
  }else{
    usersContainer=JSON.parse(localStorage.getItem("user"));
    let z=0;
    // if(userNameInput.value == usersContainer.name && emailAddressInput.value == usersContainer.Email
    //   && passwordInput.value == usersContainer.password ){
    //     alert('Heloooo');
    for(let i=0;i<usersContainer.length;i++){
    if(userNameInput.value==usersContainer[i].name &&emailAddressInput.value == usersContainer[i].Email && passwordInput.value ==usersContainer[i].password ){
    location.assign('table.html');
    z=1;
    return;
    }
  }
  if(z==0){
alert('user account not found please signup first');
location.assign('index.html');
  }
  }


  
  //! Redirect user to usersAccount Tables
  // location.assign('table.html');
  // displayUsers();
  }


// ! function to add tasks in array and Local Storage 
function addUser() {
  // !-- add users in array of object
  var user = {
    name: userNameInput.value,
    Email: emailAddressInput.value,
    password: passwordInput.value,
  };
  usersContainer.push(user);
  //! add tasks in local storage ---
  localStorage.setItem("user", JSON.stringify(usersContainer));
  console.log(usersContainer);
  // ! redirection user to login page
  location.assign('login.html');
    
}

// todo: Function To Display Users In Users Account Table
function displayUsers() {
  var cartona = "";
  let array =  JSON.parse(localStorage.getItem("user"));
  for (var i = 0; i < array.length; i++){
    cartona += `
    <div id="displayInput" class="bg-white  border-2 rounded-2 p-2 mb-3 d-flex justify-content-between ">
            <p>${array[i].name} </p>
            <p>${array[i].Email} </p>
            <p>${array[i].password} </p>
            <div>
            <button class="btn btn-outline-danger btn-sm " onclick="deleteUser(${i})" >
            <i class="fa-solid fa-xmark"></i>
            </button>
            </div>
    </div>
    <button class="btn btn-outline-danger " onclick="clearTable()" >

  `;
  // console.log(array[i]);
  }
  tableData.innerHTML=cartona;
  console.log(tableData);
  
}

// ! function to delete users Acouunts
function clearTable(){
  localStorage.clear();
  displayUsers()

}


/// ? function to delete user
function deleteUser(taskIndex) {
  usersContainer.splice(taskIndex, 1);
  //! Delete from local storage-----
  localStorage.setItem("user", JSON.stringify(usersContainer));
  displayUsers();
}

// /////////////////////////////////////////////////


// // console.log(usersContainer);
