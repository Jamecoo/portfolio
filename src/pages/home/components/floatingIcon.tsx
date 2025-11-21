import { Box, Tooltip } from "@mui/material";
import useMainControllerContext from "../context";
import { float } from "../innitialData";

interface FloatingIconProps {
  iconId: string;
}

export const FloatingIcon = ({ iconId }: FloatingIconProps) => {
  const mainCtrl = useMainControllerContext();

  const icon = mainCtrl.floatingIcons.find((i) => i.id === iconId);
  if (!icon) return null;

  const isHovered = mainCtrl.isIconHovered(iconId);

  return (
    <Tooltip title={icon.tooltip} arrow placement="top">
      <Box
        onMouseEnter={() => mainCtrl.handleIconHover(iconId)}
        onMouseLeave={() => mainCtrl.handleIconHover(null)}
        sx={{
          position: "absolute",
          width: 100,
          height: 100,
          cursor: "pointer",
          left: `calc(50% + ${icon.offsetX}px)`,
          top: `calc(50% + ${icon.offsetY}px)`,
          transition: "transform 0.3s ease",
          ...(isHovered
            ? {
                animation: "none",
                transform: "translate(-50%, -50%) scale(1.2)",
              }
            : {
                transform: "translate(-50%, -50%)",
                animation: `${float} ${icon.duration}s ease-in-out infinite`,
                animationDelay: `${icon.delay}s`,
              }),
        }}
      >
        <img
          src={icon.src}
          alt={icon.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
          }}
        />
      </Box>
    </Tooltip>
  );
};
