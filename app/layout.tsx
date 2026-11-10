import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GreenWave | More game. Less waiting.",
  description:
    "Skip the concession line and stay in the game. GreenWave helps Jets fans find the fastest nearby stands with live wait-time insights.",
  applicationName: "GreenWave"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
