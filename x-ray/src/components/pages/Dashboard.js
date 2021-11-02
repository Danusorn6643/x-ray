import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>dash board</h1>
      <Link to="/signup">
        <Button variant="outlined" size="large" type="button">
          Sign up
        </Button>
      </Link>
      <Link to="/signin">
        <Button variant="outlined" size="large" type="button">
          Sign in
        </Button>
      </Link>
    </>
  );
}
export default Dashboard;
