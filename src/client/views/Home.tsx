import React, { useEffect, useState } from "react";
import { Item } from "../../../types";
import Input from "../components/Input";
import TodoItem from "../components/TodoItem";
import { GET } from "../services/fetcher";

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);

  function getItems() {
    GET("/api/items")
      .then((items) => setItems(items))
      .catch((error) => alert(error));
  }

  useEffect(() => {
    getItems();
  }, []);
  return (
    <>
      <div className="row justify-content-center">
        <Input reload={getItems} />
        <div className="card bg-navcolor col-lg-8 col-md-6 col-sm -12 rounded">
          {items.map((item) => (
            <TodoItem key={item.id} reload={getItems} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
