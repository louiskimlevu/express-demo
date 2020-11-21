import Router from "express";
const router = Router();
export default router;

router.get("/", (req, res) => {
  return res.send(req.context.models.users);
});

router.get("/:userId", (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

// router.post("/", (req, res) => {
//   return res.send("Received a POST HTTP method");
// });

// router.put("/users/:userId", (req, res) => {
//   return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
// });

// router.delete("/users/:userId", (req, res) => {
//   return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
// });