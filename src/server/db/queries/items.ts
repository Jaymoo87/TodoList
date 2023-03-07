import { Query } from "..";
import { CreateableItem } from "../../../../types";

const create = (newItem: CreateableItem) => Query("INSERT INTO Items SET ?", [newItem]);
const all = (userid: number) => Query("SELECT * FROM Items WHERE userid=?", [userid]);
const toggle = (id: number, userid: number, currentStatus: boolean) =>
  Query("UPDATE Items SET is_complete=? WHERE id=? and userid=?", [!currentStatus, id, userid]);
const remove = (id: number, userid: number) => Query("DELETE FROM Items WHERE id=? AND userid=?", [id, userid]);

export default {
  create,
  all,
  toggle,
  remove,
};
