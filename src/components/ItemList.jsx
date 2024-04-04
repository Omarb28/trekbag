export default function ItemList({
  items,
  handleRemoveItem,
  handleToggleItem,
}) {
  return (
    <ul>
      {items.map((item) => {
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
