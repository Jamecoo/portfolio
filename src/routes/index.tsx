import { useRoutes } from "react-router-dom";
import HomePage from "../pages/home";
import { HOME_PAGE_PATH, PROFILE_PAGE_PATH } from "./config";
import ProfilePage from "../pages/profile/home";

export default function AppRoutes() {
  return useRoutes([
    { path: HOME_PAGE_PATH, element: <HomePage /> },
    { path: PROFILE_PAGE_PATH, element: <ProfilePage /> },
  ]);
}
