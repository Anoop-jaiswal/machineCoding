import { useEffect, useState } from "react";

const Dropdown = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");

  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const fetchedData = await response.json();
      console.log(fetchedData, "fetchedData");

      setData(fetchedData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <div>{selected}</div>
      <select onChange={handleChange}>
        {data.map((item: any) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
