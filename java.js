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
      row.addEventListener("mouseenter", () => { row.style.backgroundColor = "black";
    row.style.color = "red";})
     column.appendChild(row);
    b++
    }
    screen.appendChild(column);
  }
}

let bt = document.querySelector("#bt");

bt.addEventListener("click", () =>  { 
    let cons = prompt("Put the Value")
       let value = parseInt(cons);
    if (isNaN(value)) {
        alert("Please enter a number");
        return;
    }

    if (value > 100) {
        alert("Value must be less than 101");
        return;
    }


    forGrid(value)});