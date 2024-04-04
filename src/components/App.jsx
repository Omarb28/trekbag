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

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };

  const handleResetAllItems = () => {
    setItems(INITIAL_ITEMS);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const itemsHandleFunctions = {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetAllItems,
    handleRemoveAllItems,
  };

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList
          items={items}
          handleRemoveItem={handleRemoveItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar>
          <AddItemForm onAddItem={handleAddItem} />
          <ButtonGroup itemsHandleFunctions={itemsHandleFunctions} />
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
