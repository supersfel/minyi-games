import executeQuery from "@/app/_lib/db";
import { getLevelPercent, insertLevel } from "@/app/_sql/colorTestQuery";
import End from "color-test/components/End";

const Page = async ({ params }: { params: { level: string } }) => {
  const insertId = await insertLevel(params.level);
  const percent = await getLevelPercent(insertId);

  return <End percent={percent} />;
};

export default Page;
