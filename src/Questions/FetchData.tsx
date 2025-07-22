import { useEffect, useState } from "react";

interface users {
  id: string;
  name: string;
}

const useFetch = () => {
  const [data, setData] = useState<users[]>([]);
  const [error, setError] = useState<any>([]);
  const [isLoading, setIsLaoding] = useState(false);

  const fetchdata = async () => {
    try {
      setIsLaoding(true);
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const res = await data.json();
      setData(res);
    } catch (error) {
      setError(error);
    } finally {
      setIsLaoding(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return { data, error, isLoading };
};

const FetchData = () => {
  const { data, error, isLoading } = useFetch();
  console.log(isLoading, "isLoading");

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          {data.map((item) => (
            <div key={item.id}>{item?.name}</div>
          ))}
        </div>
      )}

      <div>{error}</div>
      <div>{isLoading}</div>
    </div>
  );
};

export default FetchData;
