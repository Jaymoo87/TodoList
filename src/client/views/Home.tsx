import React, { useEffect, useState } from "react";
import { Item } from "../../../types";
import Input from "../components/Input";
import TodoItem from "../components/TodoItem";
import { GET } from "../services/fetcher";

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    GET("/api/items")
      .then((items) => setItems(items))
      .catch((error) => alert(error));
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        <Input />
        <div className="card bg-danger">
          {items.map((item, index) => (
            <TodoItem key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
