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
import { useNavigate } from "react-router-dom";
import {
  CONTACT_PAGE_PATH,
  HOME_PAGE_PATH,
  NEWS_PAGE_PATH,
  PROFILE_PAGE_PATH,
  WORK_PAGE_PATH,
} from "../../routes/config";
import { TL_ICON } from "../../constant/icon";
import { colors } from "../../themes/colors";

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

const menuItems = [
  { label: "Work", path: WORK_PAGE_PATH },
  { label: "Profile", path: PROFILE_PAGE_PATH },
  { label: "News", path: NEWS_PAGE_PATH },
  { label: "Contact", path: CONTACT_PAGE_PATH },
];

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, cursor: "pointer" }}
        onClick={() => handleNavigation("/home")}
      >
        Thadsphone Lammayoth
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemText primary={item.label} />
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
        <AppBar
          sx={{
            backgroundColor: "#1B1E27",
            boxShadow: "0 0 6px rgba(58,125,255,0.25)", // subtle neon glow
          }}
        >
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
                  color: "#E6E9F0",
                }}
                onClick={() => handleNavigation(HOME_PAGE_PATH)}
              >
                <img
                  style={{
                    width: "20%",
                    height: "20%",
                    filter: "drop-shadow(0 0 4px rgba(58,125,255,0.6))",
                  }}
                  src={TL_ICON}
                  alt="TL Icon"
                />
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                color: "#E6E9F0",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: `${colors.primary.main}`,
                    transition: "0.3s",
                    fontWeight: "bold",
                  },
                }}
                onClick={() => handleNavigation("/home")}
              >
                Thadsaphone Lammayoth
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  sx={{
                    color: "#E6E9F0",
                    textTransform: "none",
                    "&:hover": {
                      color: "#3A7DFF",
                    },
                  }}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
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
