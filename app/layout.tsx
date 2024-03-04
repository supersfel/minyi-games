import StyledComponentsRegistry from "../src/registry/registry";

import "styles/reset.css";
import "react-toastify/dist/ReactToastify.css";
import { Jua } from "next/font/google";

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
      </body>
    </html>
  );
}
