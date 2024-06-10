import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";

export default function MaterialUiDemo() {
  let handleClick = () => {
    console.log("Button Was Clicked!");
  };

  return (
    <>
      <h2>Material UI Demo</h2>
      <Button onClick={handleClick} variant="contained">
        Contained
      </Button>
      <br />
      <br />
      <Button variant="outlined">Outlined</Button>
      <br />
      <br />
      <Button variant="contained" color="error">
        Error
      </Button>
      <br />
      <br />
      <div>
        <Button variant="contained" size="small">
          Small
        </Button>
        <br />
        <br />
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <br />
        <br />
        <Button variant="contained" size="large">
          Large
        </Button>
        <br />
        <br />
      </div>
      <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <br />
      <br />
      <Button variant="contained" color="success" endIcon={<SendIcon />}>
        Send
      </Button>
      <br />
      <br />
      <Alert variant="filled" severity="error">
        This is a filled error Alert.
      </Alert>
    </>
  );
}
