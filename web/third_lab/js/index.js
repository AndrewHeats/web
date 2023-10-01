import {
  addItemToPage,
  clearInputs,
  getInputValues,
  renderItemsList,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const submitEditButton = document.getElementById("submit_edit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const calculateButton = document.getElementById("calculate_button");
const summaryArea = document.getElementById("summary_area");
const sortZoos = document.getElementById("sort_button");
const editForm = document.getElementById("add_form"); // Get the edit form element

let zoos = [];
let editingItemId = null; // To track the ID of the item being edited

const addItem = ({ name, location, area, capacity }) => {
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
};

submitButton.addEventListener("click", (event) => {
  // Prevents default page reload on submit
  event.preventDefault();

  const { name, location, area, capacity } = getInputValues();

  clearInputs();

  if (editingItemId) {
    // If editingItemId is set, it means we are editing an existing item
    const editedItemIndex = zoos.findIndex((zoo) => zoo.id === editingItemId);

    if (editedItemIndex !== -1) {
      // Update the existing item
      zoos[editedItemIndex] = {
        id: editingItemId,
        name,
        location,
        area,
        capacity,
      };

      editingItemId = null; // Reset the editingItemId
    }
  } else {
    // If editingItemId is not set, it means we are adding a new item
    addItem({
      name,
      location,
      area,
      capacity,
    });
  }

  // Re-render the list of zoos
  renderItemsList(zoos);
});

// Add an event listener for the "Edit" button in each card
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit__button")) {
    const itemId = event.target.parentElement.parentElement.id;
    editingItemId = itemId;

    // Find the item being edited
    const itemToEdit = zoos.find((zoo) => zoo.id === itemId);

    if (itemToEdit) {
      // Populate the edit form fields with the item's data
      document.getElementById("name_input").value = itemToEdit.name;
      document.getElementById("location_input").value = itemToEdit.location;
      document.getElementById("area_input").value = itemToEdit.area;
      document.getElementById("capacity_input").value = itemToEdit.capacity;
    }
  }
});

findButton.addEventListener("click", () => {
  const foundZoos = zoos.filter(
    (zoo) => zoo.name.search(findInput.value) !== -1
  );

  renderItemsList(foundZoos);
});

cancelFindButton.addEventListener("click", () => {
  renderItemsList(zoos);

  findInput.value = "";
});

calculateButton.addEventListener("click", () => {
  const totalArea = zoos.reduce((total, zoo) => Number(total) + Number(zoo.area), 0);
  summaryArea.textContent = `Summary Area: ${totalArea} square kilometers`;
});

sortZoos.addEventListener("click", () => {
  zoos.sort((first, second) => {
    return second.name.localeCompare(first.name);
  });

  renderItemsList(zoos);
});

renderItemsList(zoos);
