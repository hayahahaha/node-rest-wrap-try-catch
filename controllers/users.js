// const { wrap } = require("./wrap");
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/users";

const wrap = (fn) => (req, res, next) => {
  try {
    fn(req, res, next);
  } catch (error) {
    return res.json(error.error);
  }
};

const getUser = wrap(async (req, res, next) => {
  const users = await axios.get(url);
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
