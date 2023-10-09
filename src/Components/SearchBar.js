import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export const SearchBar = ({ placeholder, data }) => {
  const [filterData, setFilterData] = useState([]);
  const [worldEntered, setWorldEntered] = useState("");

  const handleFilter = (event) => {
    const searchWorld = event.target.value;
    setWorldEntered(searchWorld);
    const newFilter = data.filter((item) =>
      item.title.toLowerCase().includes(searchWorld.toLowerCase())
    );

    if (searchWorld === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const clearInput = () => {
    setFilterData([]);
    setWorldEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={worldEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filterData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filterData.length != 0 && (
        <div className="dataResult">
          {filterData.slice(0, 15).map((item, key) => {
            return (
              <a className="dataItem" href={item.link} target="_blank">
                <p>{item.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
