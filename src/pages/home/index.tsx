import { Box } from "@mui/material";
import { MainControllerProvider } from "./context/MainControllerProvider";

const Content = () => {
  return <Box>Home Page</Box>;
};

const HomePage = () => {

  return (
    <MainControllerProvider>
      <Content />
    </MainControllerProvider>
  )
}

export default HomePage;
