import { Box } from "@mui/material";
import { MainControllerProvider } from "./context/MainControllerProvider";

const Content = () => {
  return <Box>Profile Page</Box>;
};

const ProfilePage = () => {

  return (
    <MainControllerProvider>
      <Content />
    </MainControllerProvider>
  )
}

export default ProfilePage;
