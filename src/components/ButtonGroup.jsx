import { useItemsStore } from "../stores/ItemsStore";
import Button from "./Button";
// import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  // const {
  //   handleMarkAllAsComplete,
  //   handleMarkAllAsIncomplete,
  //   handleResetAllItems,
  //   handleRemoveAllItems,
  // } = useItemsContext();

  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetAllItems = useItemsStore((state) => state.resetAllItems);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={markAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={resetAllItems} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={removeAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
