// Run after page loads
window.onload = function () {
  // 1. Logo click → go to top
  document.querySelector(".logo").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 2. Search button (btn1) → show alert
  document.querySelector(".btn1").addEventListener("click", function (e) {
    e.preventDefault();
    let value = document.querySelector(".srch").value.trim();
    if (value === "") {
      alert(" Please enter something to search!");
    } else {
      alert(" You searched for: " + value);
    }
  });

  // 3. Explore button (btn2) → open section
  document.querySelector(".btn2").addEventListener("click", function () {
    alert("Explore button clicked!");
  });

  // 4. Login form submit (btn3) → prevent refresh
  document.querySelector(".btn3").addEventListener("click", function (e) {
    e.preventDefault();
    let username = document.querySelector(".form input[type='text']").value;
    let password = document.querySelector(".form input[type='password']").value;
    if (username && password) {
      alert(" Welcome, " + username + "!");
    } else {
      alert(" Please enter both username and password.");
    }
  });

  // 5. Links inside form (Register / Forgot) → show msg
  document.querySelectorAll(".form .link a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      alert(" You clicked: " + this.innerText);
    });
  });

  // 6. Social media icons → show name
  document.querySelectorAll(".icon ion-icon").forEach(function (icon) {
    icon.addEventListener("click", function () {
      alert("🌐 Opening: " + this.getAttribute("name"));
    });
  });
};

let modebtn=document.querySelector("#mode")
let currmode='light'
modebtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    document.querySelector("body").style.backgroundColor ="rgba(50, 50, 48, 1)" ;
  } else {
    currmode = "light";
    document.querySelector("body").style.backgroundColor ="white"
      
  }
  console.log(currmode);
});

function sendMsg() {

  alert("Message Sent");

}

function sendMsg() {

  alert("Message Sent");

}