import "./globals.css";

export const metadata = {
  title: "Mohammed Safvan",
  description: "Portfolio website of Mohammed safvan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
