function SortZoos(zoos) {
  const zoosList = document.getElementById("zoolist");
  zoosList.innerHTML = "";
  zoos.sort((a, b) => a.area - b.area);
  zoos.forEach((zoo) => {
    const zooItem = document.createElement("div");
    zooItem.classList.add("zoo-item");
    zooItem.innerHTML = `
      <div class="card__body">
        <img src="./zoo.jpeg">
        <h1 class="card__title">${zoo.title}</h1>
        <h2 class="card__zoo__location">Zoo location: ${zoo.location}</h2>
        <h2 class="card__zoo__area">Zoo area: ${zoo.area}</h2>
        <h2 class="card__zoo__capacity">Zoo capacity: ${zoo.capacity}</h2>
        <button type="button" class="edit__button" onclick="editZoo(this.parentElement)">Edit</button>
      </div>
    `;

    zoosList.appendChild(zooItem);
  });
  TotalByArea();
  console.log(zoosList)
}

function TotalByArea() {
  const totalArea = 0
  const Area = zoos.reduce((totalArea, zoo) => totalArea + zoo.area, 0);
  console.log(totalArea);
  const totalAreaElement = document.getElementById("total__area");
  totalAreaElement.textContent = `Total Area: ${totalArea}`;
}


function SearchZoos() {
  const findZoo = document
    .getElementById("find__title")
    .value.toLowerCase();
  const find_zoos = zoos;
  const result = zoos.filter((zoo) => {
    return zoo.title.toLowerCase().includes(findZoo);
  });
  display(result);
  TotalByArea(result);
  showedlist = result;
}

function restore(){
  display(zoos);
  TotalByArea(zoos);
  showedlist = zoos;
}
