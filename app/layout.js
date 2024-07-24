import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bookify",
  description: "Web Development Final Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}