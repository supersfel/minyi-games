import StyledComponentsRegistry from "./registry";
import "styles/reset.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const componentType = typeof window === "undefined" ? "server" : "client";

  console.log("layout", componentType);
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
