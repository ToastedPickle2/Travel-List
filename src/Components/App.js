import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handlePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((x) => x.id !== id));
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);

    //setItems(items=>items.push(item)) can't do this because React is immutable, meaning you can't change the state or properties of objects once they are are instantiated
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form items={items} onAddItems={handleAddItems} />
        <PackingList
          items={items}
          setItems={setItems}
          onDeleteItem={handleDeleteItem}
          onPacked={handlePacked}
        />
        <Stats items={items} />
      </div>
    </>
  );
}
