import { useParams } from "react-router-dom";
import Profile from "../components/Profile";
import "../App.css";

function User(): JSX.Element {
  const params = useParams<{ id?: string }>();
  const userId = params.id || "";

  return (
    <div>
      <Profile id={userId} />
    </div>
  );
}

export default User;

