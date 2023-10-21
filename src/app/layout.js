import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { DatabaseContext, DatabaseContextProvider } from "@/context/DatabaseContext";
// import Pagination from "@/components/pagination/Pagination";
import { PaginationContext, PaginationContextProvider } from "@/context/PaginationContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hieu's Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PaginationContextProvider>
          <DatabaseContextProvider>
            <ThemeContextProvider>
              <ThemeProvider>
                <div className="container">
                  <div className="wrapper">
                    <Navbar />
                    {children}
                    <Footer />
                  </div>
                </div>
              </ThemeProvider>
            </ThemeContextProvider>
          </DatabaseContextProvider>
        </PaginationContextProvider>
      </body>
    </html>
  );
}
