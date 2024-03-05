import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { level: number } }
) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.level}`
  );

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
