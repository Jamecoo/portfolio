import "./App.css";
import AppRoutes from "./routes";
import Layout from "./components/Layout/Layout";
import { Box } from "@mui/material";
import { colors } from "./themes/colors";

function App() {
  return (
    <Box sx={{ bgcolor: `${colors.dominant.white1}`, minHeight: "100vh" }}>
      <Layout>
        <Box sx={{ mt: 6, mb: 4 }}>
          <AppRoutes />
        </Box>
      </Layout>
    </Box>
  );
}

export default App;
