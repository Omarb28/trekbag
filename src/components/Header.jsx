import Logo from "./Logo";
import Counter from "./Counter";
import { useItemsContext } from "../lib/hooks";

export default function Header() {
  const { items } = useItemsContext();

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
