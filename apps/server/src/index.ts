import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "Turborepo version 1.0.3....",
  });
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
