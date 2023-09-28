import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
import { getFurnitureData } from '../service/APIService';

const FurnitureTable = () => {
  const [setRowData] = useState([]); // Initialize rowData as an empty array
    const [inputText, setInputText] = useState("");


  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    getFurnitureData()
      .then((data) => setRowData(data))
      .catch((error) => console.error('Error fetching data:', error));
  });

  return (
    <div className="main inventory-Grid">
      <p class="search">Search Inventory</p>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
};

export default FurnitureTable;
