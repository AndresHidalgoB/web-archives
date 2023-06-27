const express = require("express");
const morgan = require("morgan");
const home = require('./routes/Home')

const app = express();

let products = [
  {
    name: "mouse",
    price: 4000,
    id: 0,
  },
  {
    name: "mouse",
    price: 4000,
    id: 1,
  },
];

app.set("port",3000)
app.use(morgan("dev"));
app.use(express.json());

app.use(home)

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  console.log(req.body);
  let newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.send("Creando producto");
});

app.put("/products/:id", (req, res) => {
  const newData = req.body;
  const productFound = products.find((p) => p.id == req.params.id);
  if (!productFound) return res.status(404).send("Product Not Found :(");

  products = products.map((p) =>
    p.id == req.params.id ? { ...p, ...newData } : p
  );
  res.json(products);
});

app.delete("/products/:id", (req, res) => {
  products = products.filter((p) => p.id !== parseInt(req.params.id));
  console.log(products);
  res.sendStatus(204);
});

app.get("/products/:id", (req, res) => {
  res.send("Actualizando productos");
});
app.listen(app.get("port"));
console.log("Server on port:", app.get('port'));
