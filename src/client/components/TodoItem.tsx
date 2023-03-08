import React, { useState } from "react";
import { Item } from "../../../types";

import { DELETE, PUT } from "../services/fetcher";

interface TodoProps extends Item {
  reload: () => void;
}

const TodoItem = ({ content, is_complete, id, reload }: TodoProps) => {
  const handleDelete = () => {
    DELETE(`/api/items/${id}`)
      .then(reload)
      .catch((error) => alert(error));
  };

  const handleToggle = () => {
    PUT(`/api/items/${id}/toggle`, { currentStatus: is_complete })
      .then(reload)
      .catch((error) => alert(error));
  };

  return (
    <p className="card bg-info m-4">
      <span className={`d-flex justify-content-center ${is_complete && "strike"}`}>{content}</span>

      <span onClick={handleToggle} className="d-flex justify-content-end">
        {is_complete ? "🗹" : "☐"}
      </span>

      {is_complete ? (
        <span className="d-flex justify-content-center">
          <span onClick={handleDelete} className="btn btn-sm btn-danger m-2">
            🗑️
          </span>
        </span>
      ) : null}
    </p>
  );
};

export default TodoItem;
