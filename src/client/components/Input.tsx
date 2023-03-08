import React, { useState } from "react";

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
      <div className="col-12 col-md-9">
        <input
          placeholder="Make A Todo List"
          className="form-control"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div className="col-12 col-md-9 d-flex justify-content-center mt-4 ">
        <button className="btn btn-info px-4 mb-4" onClick={handleSubmit}>
          Add Item To The List
        </button>
      </div>
    </div>
  );
};

export default Input;
