import { useState } from "react";


const CatalogSearch = ({ applyFilter }) => {
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleApplyClick = () => {
    applyFilter(minArea, maxArea, sortBy, searchInput);
  };
  
  return (
      <div class="filterwrapper">
        <div class="filterinner">
          <div class="filter-options">
            <div class="dropdown">
              <label for="filter">Filter:</label>
              <select
                  id="filter"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="selectFilter"
                >

                <option value="area">Sort by area</option>
                <option value="price">Sort by price</option>
                <option value="location">Sort by location</option>
              </select>
            </div>
            <p class="sorted-by">Zoos sorted by: area/price/location</p>
          </div>
          <div class="area-inputs">
            <label for="minArea">Minimum area</label>
            <input type="number"
              name="minArea"
              value={minArea}
              onChange={(e) => setMinArea(e.target.value)} />
            
            <label for="maxArea">Maximum area</label>
            <input type="number"
              name="maxArea"
              value={maxArea}
              onChange={(e) => setMaxArea(e.target.value)}  />
          <label>
            Search
            <input
              type="text"
              name="searchInput"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Type something..."
            />
          </label>
          </div>
          <button class="apply-button" onClick={handleApplyClick}>Apply</button>
        </div>
      </div>
    );
  };
export default CatalogSearch;