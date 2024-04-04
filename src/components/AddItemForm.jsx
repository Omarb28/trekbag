import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setitemText] = useState("");
  const inputRef = useRef();

  const handleChange = (event) => {
    setitemText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setitemText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        type="text"
        placeholder="Toothbrush..."
        autoFocus
        ref={inputRef}
        value={itemText}
        onChange={handleChange}
      />
      <Button>Add to list</Button>
    </form>
  );
}
