import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };

  let style = {
    marginTop: "15px",
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <>
      <h3>Post Your Reviwes Here!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          style={style}
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          name="username"
          id="username"
          placeholder="Enter Username"
        />
        <br />
        <label htmlFor="remarks">Remarks: </label>
        <textarea
          style={style}
          name="remarks"
          id="remarks"
          value={formData.remarks}
          onChange={handleInputChange}
          placeholder="Enter few Remarks"
          rows={1}
          cols={22}
        ></textarea>
        <br />
        <label htmlFor="Ratign">Rating: </label>
        <input
          style={style}
          type="number"
          value={formData.rating}
          onChange={handleInputChange}
          name="rating"
          id="rating"
          min={1}
          max={5}
        />
        <br />
        <button style={{ ...{ backgroundColor: "green" }, ...style }}>
          Submit
        </button>
      </form>
    </>
  );
}
