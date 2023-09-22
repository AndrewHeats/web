import {
  addItemToPage,
  clearInputs,
  getInputValues,
  renderItemsList,
} from "./dom_util.js";


const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");

let zoos = [];

const addItem = ({name, location, area, capacity}) => {
  const generatedId = uuid.v1();

  const newItem = {
    id: generatedId,
    name,
    location,
    area,
    capacity,
  };

  zoos.push(newItem);

  addItemToPage(newItem);
}



submitButton.addEventListener("click", (event) => {
  // Prevents default page reload on submit
  event.preventDefault();

  const { name, location, area, capacity } = getInputValues();

  clearInputs();

  addItem({
    name,
    location,
    area,
    capacity,
  });
});

findButton.addEventListener("click", () => {
  const foundZoos = zoos.filter(
    (zoo) => zoo.name.search(findInput.value) !== -1
  );

  renderItemsList(foundZoos)
});

cancelFindButton.addEventListener("click", () => {
  renderItemsList(zoos);

  findInput.value = "";
});

renderItemsList(zoos);