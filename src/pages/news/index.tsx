import { Box } from "@mui/material";
import { MainControllerProvider } from "./context/MainControllerProvider";

const Content = () => {
  return <Box>News Page</Box>;
};

const NewsPage = () => {

  return (
    <MainControllerProvider>
      <Content />
    </MainControllerProvider>
  )
}

export default NewsPage;
