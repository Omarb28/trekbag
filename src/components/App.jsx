import { useEffect, useState } from "react";
import { INITIAL_ITEMS } from "../lib/constants";
import AddItemForm from "./AddItemForm";
import BackgroundHeading from "./BackgroundHeading";
import ButtonGroup from "./ButtonGroup";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import Counter from "./Counter";

export default function App() {
  const [items, setItems] = useState(() => {
    const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
    return itemsFromLocalStorage || INITIAL_ITEMS;
  });

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

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header>
          <Logo />
          <Counter
            numberOfPackedItems={items.filter((item) => item.packed).length}
            totalNumberOfItems={items.length}
          />
        </Header>

        <ItemList
          items={items}
          handleRemoveItem={handleRemoveItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar>
          <AddItemForm onAddItem={handleAddItem} />
          <ButtonGroup itemsHandleFunctions={itemsHandleFunctions} />
        </Sidebar>
      </main>

      <Footer />
    </>
  );
}
