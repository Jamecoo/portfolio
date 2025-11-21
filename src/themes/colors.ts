export const colors = {
  primary: {
    main: '#3A7DFF', // Electric Blue (Main Brand Color)
  },

  dominant: {
    white1: '#FFFFFF',              // Pure white
    white2: '#F3F5F8',              // Soft white-gray for light elements
    white25: 'rgba(255, 255, 255, 0.25)', 
    white50: 'rgba(255, 255, 255, 0.5)',
  },

  secondary: {
    gray1: '#1B1E27',               // Dark gray background
    gray2: '#242732',               // Card / section BG
    gray3: '#5A5F6C',               // Muted text
    text: '#E6E9F0',                // Main text color (cool white)
    main: '#A259FF',                // Neon Purple
    blue1: '#4DA3FF',               // Glow Blue
    blue110: 'rgba(74, 163, 255, 0.1)', // Light glow blue background tint
    yellow10: '#FFD748',            // Cyber Yellow
  },

  accent: {
    green: '#37FF8B',               // Neon green success
    main: '#A259FF',                // Accent purple (matches secondary.main)
    red: '#FF4A4A',                 // Neon red
    yellow: '#FFD748',              // Cyber yellow
  },
} as const;

export type Colors = typeof colors;
