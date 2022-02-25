const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/todos";

const errorHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    res.status(400).send({ msg: err.message });
  });
};

const getTodos = errorHandler(async (req, res, next) => {
  const todos = await axios.get(url);
  res.json({
    data: todos.data,
  });
});

const getTodo = errorHandler(async (req, res, next) => {
  const todo = await axios.get(`${url}/1`);
  res.json({
    data: todo.data,
  });
});

module.exports = { getTodos, getTodo };
