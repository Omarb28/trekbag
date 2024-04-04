import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { useItemsContext } from "../lib/hooks";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const { items, handleRemoveItem, handleToggleItem } = useItemsContext();

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        } else if (sortBy === "unpacked") {
          return a.packed - b.packed;
        } else {
          return a.id - b.id;
        }
      }),
    [items, sortBy]
  );

  const sortingOptions = [
    {
      label: "Sort by default",
      value: "default",
    },
    {
      label: "Sort by packed",
      value: "packed",
    },
    {
      label: "Sory by unpacked",
      value: "unpacked",
    },
  ];

  return (
    <>
      <ul className="item-list">
        {items.length === 0 ? <EmptyView /> : null}

        {items.length > 0 ? (
          <section className="sorting">
            <Select
              options={sortingOptions}
              defaultValue={sortingOptions[0]}
              onChange={(option) => {
                setSortBy(option.value);
                console.log(option.value);
              }}
            />
          </section>
        ) : null}

        {sortedItems.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onRemoveItem={handleRemoveItem}
              onToggleItem={handleToggleItem}
            />
          );
        })}
      </ul>
    </>
  );
}

function Item({ item, onRemoveItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {
            onToggleItem(item.id);
          }}
        />
        {item.name}
      </label>
      <button
        onClick={() => {
          onRemoveItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
