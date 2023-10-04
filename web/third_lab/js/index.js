const titleInput = document.getElementById("title__input");
const locationInput = document.getElementById("location__input");
const areaInput = document.getElementById("area__input");
const capacityInput = document.getElementById("capacity__input");
const submitButton = document.getElementById("submit__button");
const zooForm = document.getElementById("zooform");

function checkForUnique() {
  const isUnique = !zoos.some((zoo) => {
    return (
      zoo.title === titleInput.value &&
      zoo.location === parseFloat(locationInput.value) &&
      zoo.area === parseFloat(areaInput.value) &&
      zoo.capacity === capacityInput.value
    );
  });
  return isUnique;
}

zooForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

function checkFields() {
  const titleValue = titleInput.value.trim();
  const locationValue = locationInput.value.trim();
  const areaValue = areaInput.value.trim();
  const capacityValue = capacityInput.value.trim();
  return titleValue && locationValue && areaValue && capacityValue;
}

const findButton = document.getElementById("submit__button");
findButton.addEventListener("click", function (event) {
  if (checkFields()) {
    if (checkForUnique()) {
      saveBike();
    } else {
      alert("This zoo is on list try change some information");
    }
  }
});
