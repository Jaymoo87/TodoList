import React, { useState } from "react";
import { Item } from "../../../types";

import { DELETE, PUT } from "../services/fetcher";

const TodoItem = ({ content, is_complete, id }: Item) => {
  const [isActive, setIsActive] = useState(true);

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
    <p className="">
      {content}
      {"    "}
      <span>{is_complete ? "✔️" : "⏳"}</span>

      {isActive && (
        <span className="d-block justify-content-center">
          <button onClick={handleToggle} className="btn btn-sm btn-primary m-2">
            Toggle to {is_complete ? "unfinished" : "complete"}?
          </button>
          <button onClick={handleDelete} className="btn btn-info btn-sm">
            Delete?
          </button>
        </span>
      )}
    </p>
  );
};

export default TodoItem;
