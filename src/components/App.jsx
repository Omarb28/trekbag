import { useState } from "react";
import { INITIAL_ITEMS } from "../lib/constants";
import AddItemForm from "./AddItemForm";
import BackgroundHeading from "./BackgroundHeading";
import ButtonGroup from "./ButtonGroup";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

export default function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleAddItem = (itemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleMarkAllAs = (complete) => {
    const newItems = items.map((item) => {
      item.packed = complete;
    });
    setItems(newItems);
  };

  const handleResetItems = () => {
    setItems(INITIAL_ITEMS);
  };

  const handleRemoveItems = () => {
    setItems([]);
  };

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} setItems={setItems} />
        <Sidebar>
          <AddItemForm onAddItem={handleAddItem} />
          <ButtonGroup setItems={setItems} />
        </Sidebar>
        <button
          onClick={() => {
            handleMarkAllAs(true);
          }}
        >
          Test
        </button>
      </main>

      <Footer />
    </>
  );
}
