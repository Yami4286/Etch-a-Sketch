function blackhover(e){
    e.target.style.backgroundColor = "black";
}

function forGrid(size) {
    let remov = document.querySelectorAll(".column, .row");
    remov.forEach(element => {element.remove();});
  let screen = document.querySelector(".Inside");
  let b = 1;
  for(let i = 0; i < size; i++){
    let column = document.createElement("div");
    column.classList.add("column");
    for(let j = 1 ; j <= size ; j++){
      let row = document.createElement("div");
      let Siz = 960/size;
      row.style.width = Siz + "px";
      row.style.height = Siz+ "px";
    
      row.classList.add("row")
      row.addEventListener("mouseenter", blackhover);
     column.appendChild(row);
    b++
    }
    screen.appendChild(column);
  }
}

let bt = document.querySelector("#bt");
let btn = document.querySelector("#bti");
let bti = document.querySelector("#bto");
 btn.addEventListener("click", () => {ranDoApply()});
bt.addEventListener("click", () =>  { 
    let cons = prompt("Put the Value")
       let value = parseInt(cons);

    if (value > 100) {
        alert("Value must be less than 101");
        return;
    }
     if (isNaN(value)) {
        alert("Please enter a number");
        return;
    } 
         forGrid(value)
    });

    function randColor(e){
        let r = Math.floor(Math.random() *256);
        let g = Math.floor(Math.random() *256);
        let b = Math.floor(Math.random() *256);
        e.target.style.backgroundColor =`rgb( ${r} ,${g} , ${b})` ;
    }
function ranDoApply(){
    let squares = document.querySelectorAll(".row");
    squares.forEach(square => {
        square.removeEventListener("mouseenter", blackhover);
square.addEventListener("mouseenter", randColor);
    });}

    function black() {
    let squares = document.querySelectorAll(".row");
    squares.forEach(square => {
        square.removeEventListener("mouseenter", randColor);
square.addEventListener("mouseenter", blackhover);
    });
}
    btn.addEventListener("click", () => {ranDoApply()});
    bti.addEventListener("click", ()=> { black()});

    