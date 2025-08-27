function forGrid(size) {
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

let size = prompt("What you want");

forGrid(size);

