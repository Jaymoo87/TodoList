import React, { useState } from "react";
import { Item } from "../../../types";

import { DELETE, PUT } from "../services/fetcher";

const TodoItem = ({ content, is_complete, id }: Item) => {
  const [isActive, setIsActive] = useState(false);

  const handleDelete = () => {
    DELETE(`/api/items/${id}`)
      .then((data) => alert(data.message))
      .catch((error) => alert(error));
  };

  const handleToggle = () => {
    PUT(`/api/items/${id}/toggle`, { currentStatus: is_complete })
      .then((data) => alert(data.message))
      .catch((error) => alert(error));
  };

  return (
    <p>
      {content}
      {"    "}
      <span>{is_complete ? "✔️" : "⏳"}</span>

      {isActive && (
        <span>
          <button onClick={handleToggle} className="btn">
            Toggle to {is_complete ? "unfinished" : "complete"}?
          </button>
          <button onClick={handleDelete} className="btn">
            Delete?
          </button>
        </span>
      )}
    </p>
  );
};

export default TodoItem;
