import "./App.css";
import AppRoutes from "./routes";
import Layout from "./components/Layout/Layout";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Layout>
        <AppRoutes />

        
      </Layout>
    </Box>
  );
}

export default App;
