import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  setItems,
  onDeleteItem,
  onPacked,
}) {
  function clearList() {
    const confirmed = window.confirm(
      "Ae you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              setItems={setItems}
              items={items}
              onDeleteItem={onDeleteItem}
              onPacked={onPacked}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">sort by packed status</option>
          </select>
          <button onClick={clearList}>Clear List</button>
        </div>
      </div>
    </>
  );
}
