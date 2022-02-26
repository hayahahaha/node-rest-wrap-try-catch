// const { wrap } = require("./wrap");
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/todos";

const wrap = (fn) => async (req, res, next) => {
  try {
    console.log('wrap');
    await fn(req, res, next);
    console.log('wrap');
  } catch (error) {
    console.log('error: error')
    res.status(400).send({ msg: error.message });
  }
};

const getUser = wrap(async (req, res, next) => {
  console.log('get uSer');
  const users = await axios.get(url);
  console.log('get errir');
  res.json({
    data: users.data,
  });
});

const getUserDetail = wrap(async (req, res, next) => {
  const user = await axios.get(`${url}/1`);
  res.json({
    data: user.data,
  });
});

module.exports = {
  getUser,
  getUserDetail,
};
