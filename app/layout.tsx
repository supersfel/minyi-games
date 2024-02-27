import StyledComponentsRegistry from "../src/registry/registry";

import "styles/reset.css";
import "styles/font.css";
import "styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <ToastContainer position="top-center" autoClose={3000} />
      </body>
    </html>
  );
}
