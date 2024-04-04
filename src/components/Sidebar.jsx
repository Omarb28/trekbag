// import { useItemsContext } from "../lib/hooks";
import { useItemsStore } from "../stores/ItemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  // const { handleAddItem } = useItemsContext();

  const addItem = useItemsStore((state) => state.addItem);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
}
