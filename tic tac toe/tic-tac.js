let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true; //playerX ,playerO

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const resetgame = () => {
  turnO = true;
  enablebtn()
  msgcontainer.classList.add("hide")
};

const showWinner = (winner) => {
  msg.innerText = `congratulations , winner is ${winner}`;
  msgcontainer.classList.remove("hide");
};

const disablebtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enablebtn=()=>{
  for(let box of boxes){
    box.disabled = false
    box.innerText=""
  }
}

const checkwinner = () => {
  for (let pattern of winpattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText)

    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 == posVal2 && posVal2 == posVal3) {
        // console.log("winnner", posVal1);
        disablebtn();
        showWinner(posVal1);
      }
    }
  }
};

//trigger reset button
newbtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)

