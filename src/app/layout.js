import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Music Player",
  description: "Plays Song Accoring to the user's emotion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#3865A2FF",
          padding: "0px",
          margin: "0px",
        }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
