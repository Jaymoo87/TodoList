import * as mysql from "mysql";

import { mysqlConfig } from "../config";

const pool = mysql.createPool(mysqlConfig);

export const Query = <Generic = mysql.OkPacket>(sql: string, values: unknown[] = []) => {
  return new Promise<Generic>((resolve, reject) => {
    pool.query(sql, values, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
