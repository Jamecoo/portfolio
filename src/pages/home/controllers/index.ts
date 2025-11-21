import { useState } from "react";
import {
  CODING_ICON,
  CONSOLE_ICON,
  F1_ICON,
  GUITAR_ICON,
  PASSPORT_ICON,
} from "../../../constant/icon";

interface FloatingIconData {
  id: string;
  src: string;
  alt: string;
  tooltip: string;
  delay: number;
  duration: number;
  offsetX: number;
  offsetY: number;
}

const useMainController = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const floatingIcons: FloatingIconData[] = [
    {
      id: "f1",
      src: F1_ICON,
      alt: "F1 Racing",
      tooltip: "F1 Racing Fan 🏎️",
      delay: 0,
      duration: 3,
      offsetX: 0,
      offsetY: -280,
    },
    {
      id: "console",
      src: CONSOLE_ICON,
      alt: "Gaming",
      tooltip: "Gaming Enthusiast 🎮",
      delay: 0.5,
      duration: 3.3,
      offsetX: -220,
      offsetY: -180,
    },
    {
      id: "coding",
      src: CODING_ICON,
      alt: "Coding",
      tooltip: "Coding Expert 💻",
      delay: 1,
      duration: 3.5,
      offsetX: -280,
      offsetY: 40,
    },
    {
      id: "guitar",
      src: GUITAR_ICON,
      alt: "Music",
      tooltip: "Music Lover 🎸",
      delay: 1.5,
      duration: 3.2,
      offsetX: 220,
      offsetY: -180,
    },
    {
      id: "passport",
      src: PASSPORT_ICON,
      alt: "Travel",
      tooltip: "Travel & Coffee ✈️☕",
      delay: 2,
      duration: 3.8,
      offsetX: 280,
      offsetY: 40,
    },
  ];

  const handleIconHover = (iconId: string | null) => {
    setHoveredIcon(iconId);
  };

  const isIconHovered = (iconId: string) => {
    return hoveredIcon === iconId;
  };

  return {
    floatingIcons,
    hoveredIcon,
    handleIconHover,
    isIconHovered,
  };
};

export default useMainController;
