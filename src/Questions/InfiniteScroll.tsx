import React, { useEffect, useState, useRef, useCallback } from "react";

type Item = {
  id: number;
  name: string;
};

const fetchItems = async (page: number, limit: number): Promise<Item[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Array.from({ length: limit }, (_, i) => ({
    id: page * limit + i,
    name: `Item ${page * limit + i + 1}`,
  }));
};

const InfiniteScrollList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const loadItems = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const newItems = await fetchItems(page, 10);
    setItems((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
    if (newItems.length < 10) {
      setHasMore(false);
    }
    setLoading(false);
  }, [page, loading, hasMore]);

  useEffect(() => {
    loadItems();
  }, []); // Load initial data

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadItems();
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) {
      observer.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [loadItems, hasMore, loading]);

  return (
    <div style={{ maxHeight: "90vh", overflow: "auto" }}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div ref={loadMoreRef} style={{ height: "40px" }}>
        {loading && <p>Loading...</p>}
        {!hasMore && <p>No more items.</p>}
      </div>
    </div>
  );
};

export default InfiniteScrollList;
