import { Inter } from "next/font/google";
import NavBar from "@comps/navbar";
import Footer from "@comps/footer";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Psicóloga Emanuelle",
  description: "Psicóloga Emanuelle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <header>
          <NavBar></NavBar>
        </header>
        {children}
        <Footer />
      </body>  
    </html>
  );
}
