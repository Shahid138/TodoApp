import { useState } from "react";
import "./todos.css";
import "./SearchBox.css";

const SearchBox = () => {
  const [value, setValue] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { value }]);
    console.log(mainTask);
    setValue("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h3 className="no-task">No task available</h3>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="list" key={i}>
          
            <h3 className="no-task">{t.value}</h3>
          
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="delete"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div>
      <form onSubmit={submitHandler} className="SearchBox">
        <input
          className="input"
          type="text"
          placeholder="Enter"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="button" type="submit">
          Add
        </button>
      </form>
      <hr />
      <div className="todos">
        {renderTask}
      </div>
    </div>
  );
};

export default SearchBox;
