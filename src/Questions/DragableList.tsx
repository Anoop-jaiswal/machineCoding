import React, { useState } from "react";

const DraggableList = () => {
  const [items, setItems] = useState<string[]>([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (index: number) => {
    if (draggingIndex === null) return;

    const updatedItems = [...items];
    const draggedItem = updatedItems.splice(draggingIndex, 1)[0];
    updatedItems.splice(index, 0, draggedItem);

    setItems(updatedItems);
    setDraggingIndex(null);
  };

  return (
    <div>
      <h2>Drag and drop container</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DraggableList;
