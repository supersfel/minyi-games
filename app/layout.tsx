import StyledComponentsRegistry from "../src/registry/registry";

import "styles/reset.css";
import "styles/font.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { Jua } from "next/font/google";

interface ToastProviderProps {
  children: React.ReactNode;
}

const jua = Jua({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={jua.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        {/* <ToastContainer position="top-center" autoClose={3000} /> */}
      </body>
    </html>
  );
}
