import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

const menuItems = ["Work", "Profile", "News", "Contact"];

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        My Name
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar sx={{ backgroundColor: "#000" }}>
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: { xs: 1, md: 0 },
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                LOGO
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                color: "#3B3B3B",
              }}
            >
              <Typography variant="h6" component="div">
                My Name
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "white", textTransform: "none" }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar />
      {children}
    </>
  );
}
