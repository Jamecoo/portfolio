import { Avatar, Box, Grid, Typography } from "@mui/material";
import { MainControllerProvider } from "./context/MainControllerProvider";
import { JC_IMAGES } from "../../constant/icon";
import useMainControllerContext from "./context";
import {
  fadeIn,
  fadeInLeft,
  gentleFloat,
  signatureFadeIn,
  signatureWrite,
} from "./innitialData";
import { FloatingIcon } from "./components/floatingIcon";

const Content = () => {
  const mainCtrl = useMainControllerContext();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        height: "100vh",
        p: 4,
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              animation: `${fadeInLeft} 1s ease-out`,
            }}
          >
            <Typography variant="h3" fontWeight="bold">
              THADSAPHONE LAMMAYOTH
            </Typography>

            <Typography variant="body1" mt={1}>
              Front-end Developer • React • TypeScript • UI/UX Lover
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderLeft: { md: "1px solid #eee" },
              position: "relative",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Avatar
              src={JC_IMAGES}
              alt="Jameco Images"
              sx={{
                width: 500,
                height: 500,
                animation: `${fadeIn} 1.5s ease-out, ${gentleFloat} 4s ease-in-out infinite 1.5s`,
              }}
            />

            {/* Signature below image */}
            <Box
              sx={{
                position: "relative",
                animation: `${signatureFadeIn} 2s ease-out 2s both`,
              }}
            >
              <Typography
                sx={{
                  fontFamily:
                    "'Pacifico', 'Dancing Script', 'Great Vibes', 'Sacramento', cursive",
                  fontSize: "1.5rem",
                  color: "#333",
                  fontWeight: 400,
                  fontStyle: "italic",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -5,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background:
                      "linear-gradient(to right, transparent, #333, transparent)",
                    animation: `${signatureWrite} 2s ease-out 2s both`,
                  },
                }}
              >
                I'm a Front-End Developer
              </Typography>
            </Box>

            {mainCtrl.floatingIcons.map((icon) => (
              <FloatingIcon key={icon.id} iconId={icon.id} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const HomePage = () => {
  return (
    <MainControllerProvider>
      <Content />
    </MainControllerProvider>
  );
};

export default HomePage;
