let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelector(".icon2");
let icon3 = document.querySelector(".icon3");
let listMain = document.querySelector(".listmain");
let plusButton = document.querySelector(".plus");
let addButton = document.querySelector(".add");

let dltButton;
let listBody;
let list;
let inp;
let inputElem;

let mainArr = [];

function addList() {
  dltButton = document.createElement("button");
  dltButton.innerText = "x";
  dltButton.classList.add("delete");
  listBody = document.createElement("div");
  listBody.classList.add("listbody");
  list = document.createElement("div");
  list.classList.add("list");
  inp = document.createElement("input");
  inp.classList.add("inp");
  list.append(inp);
  listBody.append(list);
  listBody.append(dltButton);
  listMain.append(listBody);
}

plusButton.addEventListener("click", addList);

addButton.addEventListener("click", () => {
  inputElem = document.querySelectorAll(".inp");
  for (let i = 0; i < 100; i++) {
    mainArr[i] = inputElem[i].value;
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

icon1.addEventListener("click", (event) => {
  event.target.style.display = "none";
  icon2.style.display = "block";

  function getInputValue() {
    let arr = [];

    inputElem.forEach((item) => {
      arr.push(item.value);
    });

    arr.sort(function (a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });

    for (let i = 0; i < arr.length; i++) {
      inputElem[i].value = arr[i];
    }
  }

  getInputValue();
});

icon2.addEventListener("click", (event) => {
  event.target.style.display = "none";
  icon3.style.display = "block";

  function getInputValue() {
    let arr = [];

    inputElem.forEach((item) => {
      arr.push(item.value);
    });

    arr.sort(function (a, b) {
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 11;
      }
      return 0;
    });

    for (let i = 0; i < arr.length; i++) {
      inputElem[i].value = arr[i];
    }
  }

  getInputValue();
});

icon3.addEventListener("click", (event) => {
  event.target.style.display = "none";
  icon1.style.display = "block";

  function getInputValue() {
    for (let i = 0; i < mainArr.length; i++) {
      inputElem[i].value = mainArr[i];
    }
  }

  getInputValue();
});
