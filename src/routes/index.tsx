import { useRoutes } from "react-router-dom";
import HomePage from "../pages/home";
import { HOME_PAGE_PATH } from "./config";

export default function AppRoutes() {
  return useRoutes([{ path: HOME_PAGE_PATH, element: <HomePage /> }]);
}
