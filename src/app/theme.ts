/**
 * Central Theme Configuration
 * Defines design system variables, colors, typography and spacing tokens.
 * Mapped to Tailwind CSS variables in globals.css.
 */

export const theme = {
  fonts: {
    body: "var(--font-poppins)",
    display: "var(--font-poppins)",
    mono: "var(--font-jetbrains-mono)",
  },
  colors: {
    light: {
      background: "#f8fafc",
      foreground: "#0f172a",
      surface: "#ffffff",
      surfaceContainer: "#f1f5f9",
      surfaceVariant: "#e2e8f0",
      primary: "#0070f3",
      primaryContainer: "#0070f3",
      onPrimaryContainer: "#ffffff",
      onSurface: "#0f172a",
      onSurfaceVariant: "#475569",
      secondary: "#0ea5e9",
      secondaryFixedDim: "#0284c7",
      border: "#cbd5e1",
    },
    dark: {
      background: "#131313",
      foreground: "#e5e2e1",
      surface: "#131313",
      surfaceContainer: "#201f1f",
      surfaceVariant: "#353534",
      primary: "#aec6ff",
      primaryContainer: "#0070f3",
      onPrimaryContainer: "#ffffff",
      onSurface: "#e5e2e1",
      onSurfaceVariant: "#c1c6d7",
      secondary: "#bdf4ff",
      secondaryFixedDim: "#00daf3",
      border: "#414754",
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "40px",
    xxl: "80px",
    gutter: "24px",
    containerMax: "1200px",
  },
  transitions: {
    default: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
    fast: "all 0.15s ease-in-out",
  },
};

export type Theme = typeof theme;
