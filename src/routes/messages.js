import Router from "express";
const router = Router();
export default router;

router.get("/", (req, res) => {
  return res.send(req.context.models.messages);
});

router.get("/:messageId", (req, res) => {
  return res.send(req.context.models.users[req.params.messageId]);
});

router.post("/messages", (req, res) => {
  const messageId = uuidv4();
  const new_message = {
    text: req.body.text,
    messageId,
    userId: req.context.user.userId,
  };
  req.context.messages[
    Object.keys(req.context.messages).length + 1
  ] = new_message;
  return res.send(new_message);
});

router.delete("/messages/:message_number", (req, res) => {
  let message = req.context.messages[req.params.message_number];
  delete req.context.messages[req.params.message_number];
  return res.send(message);
});
