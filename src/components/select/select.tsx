import React, { useState, useEffect, Profiler } from "react";
import "../select/select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";

interface SelectProps {
  data: string[];
  placeholder: string;
}

// Correct callback signature for Profiler
const onRenderCallback: any = (
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: Set<any>
) => {
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
};

const Select: React.FC<SelectProps> = ({ data, placeholder }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<string>(placeholder);
  const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [listData, setListData] = useState<string[]>(data);

  // Update list data if `data` prop changes
  useEffect(() => {
    setListData(data);
  }, [data]);

  // Close select dropdown and set the selected item
  const closeSelect = (item: string, index: number) => {
    setSelectedIndex(index);
    setSelectedItem(item);
    setIsOpenSelect(false);
  };

  // Handle when click is outside of the select component
  const handleClickAway = () => {
    setIsOpenSelect(false);
  };

  // Handle search input field click
  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation(); // Prevent dropdown closing when clicking input
  };

  // Handle search input changes
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);

    if (searchValue === "") {
      // Reset list to the original data if search input is cleared
      setListData(data);
    } else {
      const filteredData = data.filter(item =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      );
      const removeDuplicateData = filteredData.filter(
        (item, index) => filteredData.indexOf(item) === index
      );

      setListData(removeDuplicateData);
    }
  };

  return (
    // Profiler is used to measure performance of the Select component
    <Profiler id="SelectComponent" onRender={onRenderCallback}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div
          className="select-search-wrapper"
          onClick={() => setIsOpenSelect(!isOpenSelect)}
        >
          <span className="selected-text">{selectedItem}</span>
          <KeyboardArrowDownIcon className="arrow-icon" />

          {isOpenSelect && (
            <div className="searchWrapper">
              <div className="search-field">
                <input
                  type="text"
                  placeholder="Search for items..."
                  value={searchText}
                  onChange={handleSearchChange}
                  onClick={handleInputClick} // Prevent event bubbling
                />
              </div>

              <ul className="search-results">
                {listData.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => closeSelect(item, index)}
                    className={selectedIndex === index ? "active" : ""}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </Profiler>
  );
};

export default Select;
