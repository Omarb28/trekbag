import Logo from "./Logo";
import Counter from "./Counter";
import { useItemsStore } from "../stores/ItemsStore";
// import { useItemsContext } from "../lib/hooks";

export default function Header() {
  // const { items } = useItemsContext();

  const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Logo />
      <Counter
        numberOfPackedItems={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
