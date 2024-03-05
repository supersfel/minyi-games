import executeQuery from "../_lib/db";

export const insertLevel = async (level: string) => {
  const insertSql = `INSERT INTO COLOR_TEST (level) VALUES (${level})`;
  const insert = (await executeQuery(insertSql, "")) as { insertId: string };

  return insert?.insertId;
};

/**
 * 수행한 레벨이 몇%인지 가져옴
 * @param id
 * @returns
 */
export const getLevelPercent = async (id: string) => {
  const sql = `
    SELECT * 
    FROM (
      select id,PERCENT_RANK() OVER (ORDER BY LEVEL) AS PERCENT 
      from COLOR_TEST
    ) PT
    WHERE PT.id = ${id}

    `;
  const data = await executeQuery(sql, "");
  const getdata = JSON.parse(JSON.stringify(data));

  //상위 퍼센트 계산
  const percent = 100 - +(+getdata[0].PERCENT * 100).toFixed(2);
  return percent;
};
