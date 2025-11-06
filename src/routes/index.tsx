import { useRoutes } from "react-router-dom";
import { HOME_PAGE_PATH, PROFILE_PAGE_PATH } from "./config";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";

export default function AppRoutes() {
  return useRoutes([
    { path: HOME_PAGE_PATH, element: <HomePage /> },
    { path: PROFILE_PAGE_PATH, element: <ProfilePage /> },
  ]);
}
