import { useState } from "react";

const Accordion = () => {
  const data = [
    { id: 1, name: "Accordion-1", value: "ac-1" },
    { id: 2, name: "Accordion-2", value: "ac-2" },
    { id: 3, name: "Accordion-3", value: "ac-3" },
    { id: 4, name: "Accordion-4", value: "ac-4" },
  ];

  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id: any) => {
    // close if already open, else open the clicked one
    setActiveId((prev) => (prev === id ? null : id));
  };

  const AccordionItem = ({ item }: { item: any }) => {
    const isOpen = activeId === item.id;
    return (
      <div key={item.id} className="border-b border-gray-300">
        <div
          onClick={() => handleToggle(item.id)}
          className="cursor-pointer p-2 font-medium flex justify-between items-center"
        >
          {item.name}
          <span>{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && <div className="p-2 text-gray-600">{item.value}</div>}
      </div>
    );
  };

  return (
    <div className="w-64 border border-gray-400 rounded">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Accordion;
