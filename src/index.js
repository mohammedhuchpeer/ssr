import "babel-polyfill";
import express from "express";
import Renderer from "./client/helpers/renderer";
import Store from "./client/helpers/createStore";

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use("*", (req, res) => {
  const store = Store();
  res.send(Renderer(req, store));
});

app.listen(port, () => {
  console.log("app listening at port 3000");
});
