function SortZoos(zooslist) {
  const zooList = document.getElementById("zoolist");
  zooList.innerHTML = "";

  zooslist.sort((a, b) => a.title - b.title);
  zooslist.forEach((zoo) => {
    const zooItem = document.createElement("div");
    zooItem.classList.add("zoo-item");
    zooItem.innerHTML = `
      <div class="card__body">
        <img src="./zoo.jpeg">
        <h1 class="card__title">${zoo.title}</h1>
        <h2 class="card__zoo__location">Zoo location: ${zoo.location}</h2>
        <h2 class="card__zoo__area">Zoo area: ${zoo.area}</h2>
        <h2 class="card__zoo__capacity">Zoo capacity: ${zoo.capacity}</h2>
        <button type="button" class="delete__button" onclick="deleteZoo(this.parentElement)">Delete</button>
        <button type="button" class="edit__button" onclick="editZoo(this.parentElement)">Edit</button>
      </div>
    `;

    zooList.appendChild(zooItem);
  });
  TotalByPrice();
}

function TotalByArea(listzoo) {
  let totalArea = 0;
  listzoo.forEach((zoo) => {
    totalArea += zoo.area;
  });
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
