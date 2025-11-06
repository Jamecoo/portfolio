import "./App.css";
import AppRoutes from "./routes";
import Layout from "./components/Layout/Layout";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Layout>
        <Box sx={{ mt: 6, mb: 4 }}>
          <AppRoutes />
        </Box>
      </Layout>
    </Box>
  );
}

export default App;
