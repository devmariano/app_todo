import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/Error/ErrorPage";
import { TodoPage } from "../pages/Todo/TodoPage";
import { LoginPage } from "../pages/Login/LoginPage";
import { HomePage } from "../pages/Home/HomePage";
import { Layout } from "../layouts/Layout";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoutes>
                <HomePage />
              </PrivateRoutes>
            }
          />
          <Route
            path="todo"
            element={
              <PrivateRoutes>
                <TodoPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="todo/:id"
            element={
              <PrivateRoutes>
                <TodoPage />
              </PrivateRoutes>
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};
