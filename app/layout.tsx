import StyledComponentsRegistry from "./registry";

import "styles/reset.css";
import "styles/font.css";
import "styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import ToastProvider, { ToastContainer } from "react-toastify";

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
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
