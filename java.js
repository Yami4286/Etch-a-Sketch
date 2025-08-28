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
      row.style.border = "2px solid black"
      row.classList.add("row")
      row.textContent = b;
     column.appendChild(row);
    b++
    }
    screen.appendChild(column);
  }
}
let cons = document.querySelector("#Size");
let bt = document.querySelector("#bt");

bt.addEventListener("click", () =>  { 
       let value = parseInt(cons.value);
    if (isNaN(value)) {
        alert("Please enter a number");
        return;
    }

    if (value > 100) {
        alert("Value must be less than 101");
        return;
    }


    forGrid(value)});


