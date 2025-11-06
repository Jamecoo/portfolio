import { Box } from "@mui/material";
import { MainControllerProvider } from "./context/MainControllerProvider";

const Content = () => {
  return <Box>Work Page</Box>;
};

const WorkPage = () => {

  return (
    <MainControllerProvider>
      <Content />
    </MainControllerProvider>
  )
}

export default WorkPage;
