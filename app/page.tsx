import Link from "next/link";

export default function Page() {
  return (
    <Link
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "5rem",
      }}
      href="/color-test/progress"
    >
      게임하러 가기
    </Link>
  );
}
