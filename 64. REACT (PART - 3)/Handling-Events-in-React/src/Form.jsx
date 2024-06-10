function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form was submitted!");
}

export default function Form() {
  return (
    <>
      <form style={{ marginTop: "20px" }} onSubmit={handleFormSubmit}>
        <input placeholder="Enter Something" />
        <button>Submit</button>
      </form>
    </>
  );
}
