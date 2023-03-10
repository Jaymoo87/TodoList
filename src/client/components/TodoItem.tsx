import React from "react";
import { Item } from "../../../types";

import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill, RiDeleteBin2Line } from "react-icons/ri";

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
    <p className="card bg-taskbg border border-btncolor shadow m-4">
      <span className={`d-flex justify-content-center ${is_complete && "strike"}`}>{content}</span>

      <span onClick={handleToggle} className="d-flex justify-content-end mb-3 mx-3">
        {is_complete ? (
          <span>
            <RiDeleteBin2Line size={"1em"} onClick={handleDelete} /> <RiCheckboxCircleFill />
          </span>
        ) : (
          <RiCheckboxBlankCircleLine />
        )}
      </span>

      {/* {is_complete ? (
        <span className="d-flex justify-content-end">
          <span onClick={handleDelete}></span>
        </span>
      ) : null} */}
    </p>
  );
};

export default TodoItem;
