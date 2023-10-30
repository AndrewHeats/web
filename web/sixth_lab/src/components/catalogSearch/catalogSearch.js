const CatalogSearch = () => {
    return (
      <div class="filterwrapper">
        <div class="filterinner">
          <div class="filter-options">
            <div class="dropdown">
              <label for="filter">Filter:</label>
              <select id="filter">
                <option>Sort by area</option>
                <option>Sort by price</option>
                <option>Sort by location</option>
              </select>
            </div>
            <p class="sorted-by">Zoos sorted by: area/price/location</p>
          </div>
          <div class="area-inputs">
            <label for="minArea">Minimum area</label>
            <input type="text" id="minArea" name="minArea" />
            <label for="maxArea">Maximum area</label>
            <input type="text" id="maxArea" name="maxArea" />
          </div>
          <button class="apply-button">Apply</button>
        </div>
      </div>
    );
  };
  
  export default CatalogSearch;
  