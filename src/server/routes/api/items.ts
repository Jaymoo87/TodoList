import * as express from "express";
import Items from "../../db/queries/items";

const itemRouter = express.Router();

itemRouter.get(`/`, async (req, res) => {
  if (!req.user) return res.status(401).json({ message: "bad creds" });
  const userid = req.user.id;

  try {
    const items = await Items.all(userid);
    res.json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error getting items", error: error.sqlMessage || error.message });
  }
});

itemRouter.post(`/`, async (req, res) => {
  const { content } = req.body;
  if (!req.user) return res.status(401).json({ message: "bad creds" });
  if (!content) return res.status(401).json({ message: "content is not valid!" });

  try {
    const { insertId } = await Items.create({ userid: req.user.id, content });
    res.status(201).json({ message: "new item added", id: insertId, content });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error getting items", error: error.sqlMessage || error.message });
  }
});

/// just for toggling the current status
itemRouter.put(`/:id/toggle`, async (req, res) => {
  if (!req.user) return res.status(401).json({ message: "bad creds" });

  const id = parseInt(req.params.id);
  const userid = req.user.id;

  const { currentStatus } = req.body;
  if (currentStatus === undefined)
    return res.status(400).json({ message: "ummm... you didnt make a todo item... FREE DAY" });

  try {
    const { insertId } = await Items.toggle(id, userid, currentStatus);
    res.status(201).json({ message: " toggled it up", id: insertId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error toggling items", error: error.sqlMessage || error.message });
  }
});

itemRouter.delete(`/:id`, async (req, res) => {
  if (!req.user) return res.status(401).json({ message: "bad creds" });
  const userid = req.user.id;
  const id = parseInt(req.params.id);

  try {
    const { insertId } = await Items.remove(id, userid);
    res.status(201).json({ message: "item deleted", id: insertId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error deleting items", error: error.sqlMessage || error.message });
  }
});

export default itemRouter;
