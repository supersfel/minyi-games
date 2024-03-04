import styled from "styled-components";

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
        </div>
      </body>
    </html>
  );
}
