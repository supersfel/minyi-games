import { ToastContainer } from "react-toastify";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div style={{ marginTop: "3rem" }}>
          <p
            style={{
              fontSize: "3rem",
              textAlign: "center",
            }}
          >
            색감 테스트
          </p>
          {children}

          <ToastContainer position="top-center" autoClose={3000} />
        </div>
      </body>
    </html>
  );
}
