let password = document.getElementById('password');
let money= document.getElementById('money');
let firstName= document.getElementById('username');
let userName=document.getElementById("uname");
let userPassword=document.getElementById("upassword");
let userMoney = document.getElementById("addmoney");
let sendMoney = document.getElementById("sendmoney");
let recipientUsername = document.getElementById("recipient-username");
let senderUsername = document.getElementById("sender-username");
let users=[];
if(localStorage.getItem("data")!=null){
  users = JSON.parse(localStorage.getItem("data"));
}else {
  users =[];
}
function signup(){
  let user = {
    password:password.value,
    money:money.value,
    firstName:firstName.value,
}
users.push(user);
    localStorage.setItem("data",JSON.stringify(users));
}

function login(){
  let uname=userName.value;
  let upassword=userPassword.value;
if(localStorage.getItem("data")!=null){
  users = JSON.parse(localStorage.getItem("data"));
  console.log(users);
 for(i=0;i<users.length;i++){
if(uname==users[i].firstName && upassword==users[i].password){
  localStorage.setItem("name",uname);
    window.location.href="firstpage.html";

    console.log("yes");
}
else{
    console.log("Try Again");
}
}
}else {
  users =[];
}


}

function addmoney() {
  let name=localStorage.getItem("name");
  console.log(name);
  let umoney=userMoney.value;
  console.log(users);
  for (var i = 0; i < users.length; i++) {
    if (name == users[i].firstName) {
      users[i].money = parseInt(users[i].money) + parseInt(umoney);
      localStorage.setItem("data", JSON.stringify(users));
      console.log("Money added successfully");
      return;
    } 
  }
  console.log("User not found");
}




function sendmoney() {
  let smoney=sendMoney.value;
  let recipientUser = recipientUsername.value;
  let senderUser = senderUsername.value;

  for (let i = 0; i < users.length; i++) {
    if (senderUser == users[i].firstName) {
      if (users[i].money >= smoney) {
        users[i].money -= smoney;
        localStorage.setItem("data", JSON.stringify(users));

        for (var j = 0; j < users.length; j++) {
          if (recipientUser == users[j].firstName) {
            users[j].money = parseInt(users[j].money) + parseInt(smoney);
            localStorage.setItem("data", JSON.stringify(users));
            console.log("Money sent successfully");
            return;
          }
        }
        console.log("Recipient not found");
        return;
      } else {
        console.log("Not enough money!");
        return;
      }
    }
  }
  console.log("Sender not found");
}


function topbud() {
  let firstmax = -Infinity, secondmax = -Infinity, thirdmax = -Infinity;
  let firstuser, seconduser, thirduser;

  for (var i = 0; i < users.length; i++) {
    if (users[i].money > firstmax) {
      thirdmax = secondmax;
      secondmax = firstmax;
      firstmax = users[i].money;

      thirduser = seconduser;
      seconduser = firstuser;
      firstuser = users[i].firstName;
   } else if (users[i].money > secondmax) {
     thirdmax = secondmax;
     secondmax = users[i].money;

     thirduser = seconduser;
     seconduser = users[i].firstName;
    } else if (users[i].money > thirdmax) {
      thirdmax = users[i].money;
      thirduser = users[i].firstName;
    }
  }

  console.log(firstmax);
  console.log(secondmax);
  console.log(thirdmax);
  console.log(firstuser);
  console.log(seconduser);
  console.log(thirduser);
}