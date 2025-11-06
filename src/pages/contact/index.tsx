import { Box } from "@mui/material";
import { MainControllerProvider } from "./context/MainControllerProvider";

const Content = () => {
  return <Box>Home Page</Box>;
};

const ContactPage = () => {

  return (
    <MainControllerProvider>
      <Content />
    </MainControllerProvider>
  )
}

export default ContactPage;
