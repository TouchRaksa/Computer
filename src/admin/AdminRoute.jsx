import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

function AdminRoute({ children }) {
  const user = auth.currentUser;

  if (!user) return <Navigate to="/login" />;

  if (user.email !== "admin@gmail.com") {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;
