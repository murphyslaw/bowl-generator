import "./globals.css";
import "./tokens.css";
import "./theme.light.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bowl Generator",
  description: "Generate a healthy bowl idea for your next meal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html id="root" lang="en">
      <body>{children}</body>
    </html>
  );
}
