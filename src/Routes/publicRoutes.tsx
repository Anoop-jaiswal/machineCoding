import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { PrivateRoute } from "./privateRoute";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default PublicRoutes;
