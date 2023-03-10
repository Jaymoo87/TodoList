import React, { useState } from "react";

import { FcTodoList } from "react-icons/fc";

import { POST } from "../services/fetcher";

const Input = ({ reload }: { reload: () => void }) => {
  const [item, setItem] = useState("");

  const handleSubmit = () => {
    POST(`/api/items`, { content: item })
      .then(reload)
      .catch((error) => console.log(error));
  };

  return (
    <div className="row justify-content-center ">
      {/* <h2 className="d-flex justify-content-center"></h2> */}
      <div className="col-12 col-md-9 card bg-navcolor p-4">
        <input
          placeholder="Make A Todo List"
          className="form-control border-none bg-inputbg shadow"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div className="col-12 col-md-9 d-flex justify-content-center mt-4 ">
        <button className="btn btn-btncolor px-4 mb-4" onClick={handleSubmit}>
          Add Item To The List <FcTodoList size={"2em"} />
        </button>
      </div>
    </div>
  );
};

export default Input;
