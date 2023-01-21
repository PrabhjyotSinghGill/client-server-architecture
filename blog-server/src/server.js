import express from "express";

let articlesInfo = [
  {
    name: "learn-react",
    upvotes: 0,
    comments: [],
  },
  {
    name: "learn-node",
    upvotes: 0,
    comments: [],
  },
  {
    name: "mongodb",
    upvotes: 0,
    comments: [],
  },
];

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.post("/", (req, res) => {
  console.log(`Hello!${req.body.name}`);
});

app.get("/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}!!`);
});

app.put("/api/articles/:name", (req, res) => {
  const { name } = req.params;
  const article = articlesInfo.find((a) => a.name === name);
  if (article) {
    article.upvotes += 1;
    res.send(`The ${name} article now has ${article.upvotes} upvotes`);
  } else {
    res.send("That article doesn't exist!");
  }
});

app.post("/api/articles/:name/comments", (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  const article = articlesInfo.find((a) => a.name === name);

  if (article) {
    article.comments.push({ postedBy, text });
    res.send(article.comments);
  } else {
    res.send("That article doesn't exist!");
  }
});

app.listen(8000, () => {
  console.log("Server is Listening on Port: 8000");
});
