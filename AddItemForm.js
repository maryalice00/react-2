// AddItemForm.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddItemForm({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState("snack"); // Default to snack
  const history = useHistory();

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setItemType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the new item data to the server
    const newItem = {
      name: itemName,
      type: itemType
    };
    onAddItem(newItem);
    // Redirect to the menu page
    history.push("/");
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={itemName} onChange={handleNameChange} />
          </label>
        </div>
        <div>
          <label>
            Type:
            <select value={itemType} onChange={handleTypeChange}>
              <option value="snack">Snack</option>
              <option value="drink">Drink</option>
            </select>
          </label>
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItemForm;
