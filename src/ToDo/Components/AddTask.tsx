import $ from "jquery"; // Import jQuery
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "bootstrap-datepicker";
import calendar from "./icons/calendar.svg";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../ReduxComp/todoSlice";

const AddTask = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    label: "",
    name: "",
    dateAdded: "",
    desc: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    dispatch(addTodo(input));
    console.log("i am submitted");

    setInput({ label: "", name: "", dateAdded: "dd/mm/yy", desc: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,

      [name]: value, // Convert `dateAdded` to Date
    }));

    console.log("i am changed with this", input);
  };
  useEffect(() => {
    $("#datepicker")
      .datepicker({
        format: "yyyy-mm-dd", // ISO format
        autoclose: true,
      })
      .on("changeDate", (e) => {
        const selectedDate = e.format("yyyy-mm-dd"); // Format date correctly
        setInput((prevInput) => ({ ...prevInput, dateAdded: selectedDate }));
      });
    return () => {
      $("#datepicker").datepicker("destroy");
    };
  }, []);

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label>Label</label>
          <input
            type="text"
            className="form-control"
            placeholder="task Category"
            name="label"
            value={input.label}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4 mb-3">
          <label>Task</label>
          <input
            type="text"
            className="form-control"
            placeholder="task title"
            name="name"
            value={input.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date input */}
        <div className="col-md-4 mb-3">
          <label htmlFor="date">Date</label>
          <div className="input-group date" id="datepicker">
            <input
              type="Date"
              className="form-control"
              id="date"
              name="dateAdded"
              value={input.dateAdded}
              onChange={handleChange}
              required
            />
            <span className="input-group-append">
              <span className="input-group-text bg-light d-block">
                <img src={calendar} alt="Calendar" />
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            id="description"
            name="desc"
            value={input.desc}
            rows={3}
            placeholder="task description"
            onChange={handleChange}
            required
          ></textarea>
        </div>
      </div>

      {/* Button aligned to the right */}
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-dark">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTask;
