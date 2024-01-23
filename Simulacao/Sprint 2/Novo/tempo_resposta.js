const redis = require("redis");

const products = [
  {
    id: 1,
    name: "Produto 1",
    price: 10,
  },
  {
    id: 2,
    name: "Produto 2",
    price: 20,
  },
  {
    id: 3,
    name: "Produto 3",
    price: 30,
  },
  {
    id: 4,
    name: "Produto 4",
    price: 40,
  },
];

async function predict(productId) {
  //Aguarde 2 segundos e retorne a categoria do produto
  let product = products.find((p) => p.id == productId);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (product) {
        const category = product.price > 20 ? "Categoria 1" : "Categoria 2";

        resolve({ category: category, acuracy: 0.91 });
      } else {
        reject("Produto não encontrado");
      }
    }, 2000);
  });
}

async function getProducts(redisClient, id) {
  const productId = id;
  const cacheResults = await redisClient.get(`produtos:${productId}`);
  return { dados: cacheResults };
}

async function setProducts(redisClient, id, name) {
  const productId = id;
  await redisClient.set(`produtos:${productId}`, name);
  await redisClient.expireAt(
    `produtos:${productId}`,
    parseInt(+new Date() / 1000) + 86400
  );
}

async function run(redisClient, id) {
  const cacheResults = await getProducts(redisClient, id);

  if (cacheResults.dados) {
    console.log(cacheResults.dados);
    return cacheResults.dados;
  }

  const prediction = await predict(id);
  if (prediction.acuracy > 0.9) {
    await setProducts(redisClient, id, prediction.category);
  }

  console.log(prediction);
  return prediction;
}

module.exports = {
  predict,
  getProducts,
  setProducts,
  run
};