import { useState, version } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  let style = {
    marginTop: "15px",
  };

  return (
    <>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">FullName: </label>
        <input
          style={style}
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Enter Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="username">username: </label>
        <input
          style={style}
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          style={style}
          id="password"
          name="password"
          type="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <br />
        <button style={{ ...{ backgroundColor: "green" }, ...style }}>
          Submit
        </button>
      </form>
    </>
  );
}
